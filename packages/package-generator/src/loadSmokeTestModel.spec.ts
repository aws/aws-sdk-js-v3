import { loadSmokeTestModel } from "./loadSmokeTestModel";
import { SmokeTestModel } from "@aws-sdk/build-types";
import { join } from "path";

jest.mock("fs", () => {
  return {
    existsSync: jest.fn().mockReturnValue(false),
    readFileSync: jest.fn()
  };
});

import { existsSync, readFileSync, exists } from "fs";

const mockModel: SmokeTestModel = {
  version: 1,
  defaultRegion: "us-west-2",
  testCases: [
    {
      operationName: "foo",
      input: {},
      errorExpectedFromService: false
    },
    {
      operationName: "bar",
      input: {
        fake: "Uh-oh"
      },
      errorExpectedFromService: true
    }
  ]
};

describe("loadSmokeTestModel", () => {
  beforeEach(() => {
    (existsSync as any).mockClear();
    (readFileSync as any).mockClear();
  });

  it("should load a smoke.json file from the given directory if present", () => {
    (existsSync as any).mockImplementation(() => true);
    (readFileSync as any).mockImplementation(() =>
      Buffer.from(JSON.stringify(mockModel, null, 4))
    );

    const model = loadSmokeTestModel(join("path", "to", "foo", "bar"));
    expect((existsSync as any).mock.calls.length).toBe(1);
    expect(model).toEqual(mockModel);
  });

  it(`should load a smoke.json file from the given directory's parent if not found at given location`, () => {
    (existsSync as any).mockImplementation((path: string) => {
      if (path === join("path", "to", "foo", "smoke.json")) {
        return true;
      }
      return false;
    });
    (readFileSync as any).mockImplementation(() =>
      Buffer.from(JSON.stringify(mockModel, null, 4))
    );

    const model = loadSmokeTestModel(join("path", "to", "foo", "bar"));
    expect((existsSync as any).mock.calls.length).toBe(2);
    expect(model).toEqual(mockModel);
  });

  it(`should return undefined if no smoke.json found`, () => {
    (existsSync as any).mockImplementation((path: string) => false);

    const model = loadSmokeTestModel(join("path", "to", "foo", "bar"));
    expect((existsSync as any).mock.calls.length).toBe(2);
    expect(model).toBeUndefined();
  });
});
