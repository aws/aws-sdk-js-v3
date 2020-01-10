/**
 * @jest-environment node
 */

import { localStorage } from "./localStorage";
import { InMemoryStorage } from "./InMemoryStorage";

describe("localStorage", () => {
  //use node run time in jest(default jsdom)
  it("should return an in-memory storage implementation when indexDB or localStorage is not available", () => {
    expect(localStorage()).toBeInstanceOf(InMemoryStorage);
  });
});
