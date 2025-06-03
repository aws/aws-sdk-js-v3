import { describe, expect, it } from "vitest";

import { DynamoDbSchema, DynamoDbTable, embed } from "../schema";
import { ItemSchema } from "../schema/item/itemSchema";
import { DataMarshaller } from "./DataMarshaller";

class Profile {
  bio!: string;
}

Object.defineProperty(Profile.prototype, DynamoDbSchema, {
  value: {
    bio: { type: "String" },
  },
});

class User {
  id!: string;
  name!: string;
  age?: number;
  profile!: Profile;
}

const schema: ItemSchema = {
  id: { type: "String", keyType: "HASH" },
  name: { type: "String", attributeName: "full_name" },
  age: { type: "Number" },
  profile: embed(Profile),
};

// Attach metadata
Object.defineProperty(User.prototype, DynamoDbSchema, { value: schema });
Object.defineProperty(User.prototype, DynamoDbTable, { value: "Users" });

describe("DataMarshaller", () => {
  it("should marshall full item", () => {
    const user = Object.assign(new User(), {
      id: "123",
      name: "Alice",
      profile: Object.assign(new Profile(), { bio: "hello" }),
    });

    const marshalled = DataMarshaller.marshall(user, schema);

    expect(marshalled).toEqual({
      id: { S: "123" },
      full_name: { S: "Alice" },
      profile: {
        M: {
          bio: { S: "hello" },
        },
      },
    });
  });

  it("should marshall key only", () => {
    const user = Object.assign(new User(), {
      id: "123",
      name: "X",
      age: 99,
      profile: Object.assign(new Profile(), { bio: "unused" }),
    });
    const marshalledKey = DataMarshaller.marshallKey(user, schema);
    expect(marshalledKey).toEqual({
      id: { S: "123" },
    });
  });

  it("should unmarshall item", () => {
    const item = {
      id: { S: "123" },
      full_name: { S: "Alice" },
      age: { N: "30" },
      profile: {
        M: {
          bio: { S: "hello" },
        },
      },
    };
    const result: User = DataMarshaller.unmarshall(item, schema, User);
    expect(result).toBeInstanceOf(User);
    expect(result.id).toBe("123");
    expect(result.name).toBe("Alice");
    expect(result.age).toBe(30);
    expect(result.profile).toBeInstanceOf(Profile);
    expect(result.profile.bio).toBe("hello");
  });

  it("should unmarshall item into a plain object", () => {
    const item = {
      id: { S: "123" },
      full_name: { S: "Alice" },
      age: { N: "30" },
      profile: {
        M: {
          bio: { S: "hello" },
        },
      },
    };

    const result = DataMarshaller.unmarshallObject(item, schema);

    expect(result).toEqual({
      id: "123",
      name: "Alice",
      age: 30,
      profile: {
        bio: "hello",
      },
    });

    // Ensure it's NOT an instance of User (important distinction)
    expect(result).not.toBeInstanceOf(User);
  });

  it("should roundtrip scalar fields", () => {
    class Entity {
      id!: string;
      age!: number;
    }

    const schema = {
      id: { type: "String", keyType: "HASH" },
      age: { type: "Number" },
    } as const;

    Object.defineProperty(Entity.prototype, DynamoDbSchema, { value: schema });
    Object.defineProperty(Entity.prototype, DynamoDbTable, { value: "Entities" });

    const original = Object.assign(new Entity(), { id: "e1", age: 42 });

    const marshalled = DataMarshaller.marshall(original, schema);
    const result = DataMarshaller.unmarshall(marshalled, schema, Entity);

    expect(result).toEqual(original); // 👈 roundtrip
  });

  it("should roundtrip embedded document", () => {
    class Profile {
      bio!: string;
      age!: number;
    }

    Object.defineProperty(Profile.prototype, DynamoDbSchema, {
      value: {
        bio: { type: "String" },
        age: { type: "Number" },
      },
    });

    class User {
      id!: string;
      profile!: Profile;
    }

    const schema = {
      id: { type: "String", keyType: "HASH" },
      profile: embed(Profile),
    } as const;

    Object.defineProperty(User.prototype, DynamoDbSchema, { value: schema });
    Object.defineProperty(User.prototype, DynamoDbTable, { value: "Users" });

    const original = Object.assign(new User(), {
      id: "u1",
      profile: Object.assign(new Profile(), {
        bio: "developer",
        age: 30,
      }),
    });

    const marshalled = DataMarshaller.marshall(original, schema);
    const result = DataMarshaller.unmarshall(marshalled, schema, User);

    expect(result).toEqual(original);
  });

  it("should roundtrip using factory + unmarshallObject", () => {
    class UserRecord {
      id!: string;
      name!: string;
    }

    const schema = {
      id: { type: "String", keyType: "HASH" },
      name: { type: "String" },
    } as const;

    Object.defineProperty(UserRecord.prototype, DynamoDbSchema, { value: schema });
    Object.defineProperty(UserRecord.prototype, DynamoDbTable, { value: "Users" });

    class User {
      constructor(public id: string, public name: string) {}

      static from(data: UserRecord): User {
        return new User(data.id, data.name.toUpperCase());
      }
    }

    const original = { id: "123", name: "alice" };

    const marshalled = DataMarshaller.marshall(original, schema);
    const plain = DataMarshaller.unmarshallObject(marshalled, schema) as UserRecord;
    const hydrated = User.from(plain);

    expect(hydrated).toEqual(new User("123", "ALICE"));
  });
});
