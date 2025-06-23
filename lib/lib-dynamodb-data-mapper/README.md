# Amazon DynamoDB DataMapper Library

[![Apache 2 License](@TBD)](http://aws.amazon.com/apache-2-0/)

This library provides a `DataMapper` class that enables seamless mapping between application domain models and their persisted representation in DynamoDB. You can define your schema using metadata protocol, decorators (upcoming), or static symbols, and interact with DynamoDB using clean, object-oriented methods.

Built for modern async/await workflows and powered by a schema-aware marshalling engine, this library simplifies the data access layer with strong typing, flexibility, and DynamoDB idiomatic practices.

## Getting started

> Work in progress! The types and interface are subject to change as implementation and review progress.

### Installation

```bash
npm install @aws-sdk/lib-dynamodb-data-mapper
```

> Other dependencies:

```bash
npm install @aws-sdk/client-dynamodb
```

---

## DataMapper Public Interface

```ts
interface DataMapperConfig {
  client: DynamoDBClient;
  translateConfig?: marshallOptions;
}

class DataMapper<D extends object, T = D> {
  static from(modelCtor: new () => T, config: DataMapperConfig & TableBindingConfig<D, T>): DataMapper<D, T>;

  put(
    item: T,
    criteria?: Omit<Partial<PutItemCommandInput>, "TableName" | "Item">,
    options?: HttpHandlerOptions
  ): Promise<T>;

  get(key: Partial<D>, options?: HttpHandlerOptions): Promise<T | undefined>;

  delete(): Promise<void>; // Not yet implemented
  query(): AsyncIterable<T>; // Not yet implemented
  scan(): AsyncIterable<T>; // Not yet implemented
}
```

---

## Supported Object Mapping Styles

### 1. Plain Object (T = D)

```ts
type User = { id: string; name: string };
const mapper = DataMapper.from(class Placeholder {}, { client });
await mapper.put({ id: "123", name: "Alice" });
```

### 2. Class with Custom Transformers

```ts
class User {
  id!: string;
  name!: string;
  static fromDocument(doc) {
    return Object.assign(new User(), doc);
  }
  static toDocument(user) {
    return { id: user.id, name: user.name };
  }
}

const mapper = DataMapper.from(User, {
  client,
  tableName: "Users",
  fromDocument: User.fromDocument,
  toDocument: User.toDocument,
});
```

### 3. Protocol Metadata Schema

```ts
class User {
  id!: string;
  name!: string;
}

Object.defineProperty(User.prototype, Symbol.for("DynamoDbSchema"), {
  value: { id: { type: "String", keyType: "HASH" }, name: { type: "String" } },
});

Object.defineProperty(User.prototype, Symbol.for("DynamoDbTable"), {
  value: "Users",
});

const mapper = DataMapper.from(User, { client });
```

### 4. Decorator-based Models _(planned)_

```ts
@Table("Users")
class User {
  @hashKey()
  id!: string;

  @attribute()
  name!: string;
}
```

> Not yet implemented — decorator support will be released in future iterations.

---

## Supported operations

> This is a work in progress and will be updated as implementations are completed.

T### `put`

```ts
await mapper.put({ id: "123", name: "Alice" });
```

### `get`

```ts
await mapper.get({ id: "123" });
```

### `delete`, `query`, `scan`

> Not yet implemented — will be released in future iterations.

---

## Status

- ✅ `put()` implemented and tested
- ✅ `get()` implemented and tested
- 🟡 `delete()` throws "not implemented"
- 🟡 `query()` throws "not implemented"
- 🟡 `scan()` throws "not implemented"
- 🔜 Decorator-based mapping: not yet supported
- 🔜 batching, and expression DSL: planned
- Transactions defer for future releases
