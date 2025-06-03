import type { HttpHandlerOptions } from "@smithy/types";
import { beforeEach, describe, expect, it, vi } from "vitest";

import { DataMapper } from "./DataMapper";
import { TableMapper } from "./TableMapper";

class UserRecord {
  id!: string;
  name!: string;
}

class User {
  constructor(public id: string, public name: string) {}
  static from(data: UserRecord) {
    return new User(data.id, data.name.toUpperCase());
  }
}

describe("TableMapper.from", () => {
  const mockMapper = {
    get: vi.fn(),
    put: vi.fn(),
    delete: vi.fn(),
    query: vi.fn(),
    scan: vi.fn(),
    client: {} as any,
  } as unknown as DataMapper;

  const modelCtor = UserRecord;
  const factory = User.from;

  let tableMapper: TableMapper<UserRecord, User>;

  beforeEach(() => {
    vi.resetAllMocks();
    tableMapper = TableMapper.from(modelCtor, factory, mockMapper);
  });

  it("should return a TableMapper instance", () => {
    expect(tableMapper).toBeInstanceOf(TableMapper);
  });

  it("should call DataMapper.get with bound factory and modelCtor", async () => {
    const userRecord = { id: "123", name: "Alice" };
    const expectedUser = User.from(userRecord);

    (mockMapper.get as any).mockResolvedValue(expectedUser);

    const result = await tableMapper.get({ id: "123" });

    expect(mockMapper.get).toHaveBeenCalledWith({ id: "123" }, factory, modelCtor, undefined);
    expect(result).toEqual(expectedUser);
  });

  it("should call DataMapper.put with raw data", async () => {
    const record: UserRecord = { id: "123", name: "Bob" };

    (mockMapper.put as any).mockResolvedValue(record);

    const result = await tableMapper.put(record);

    expect(mockMapper.put).toHaveBeenCalledWith(record, undefined, undefined);
    expect(result).toEqual(record);
  });

  it("should throw on delete because not implemented", async () => {
    await expect(() => tableMapper.delete({ id: "123" })).rejects.toThrow("delete() not implemented yet.");
  });

  it("should pass HttpHandlerOptions to get()", async () => {
    const options: HttpHandlerOptions = { requestTimeout: 1000 };
    await tableMapper.get({ id: "abc" }, options);

    expect(mockMapper.get).toHaveBeenCalledWith({ id: "abc" }, factory, modelCtor, options);
  });
});
