import fs from "node:fs";
import path from "node:path";
import { describe, test as it } from "vitest";

import { jsonReviver } from "../json/jsonReviver";

const json = fs.readFileSync(path.join(__dirname, "./new-document-type-test-cases.json"), "utf-8");

export const testCases = JSON.parse(json, jsonReviver);

describe("placeholder", () => {
  it("", () => {});
});
