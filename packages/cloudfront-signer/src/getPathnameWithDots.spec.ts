import { describe, expect, it } from "vitest";

import { getPathnameWithDots } from "./getPathnameWithDots";

describe("getPathnameWithDots", () => {
  const origin = "http://d1234.cloudfront.net";

  it("should return if there's no pathname", () => {
    expect(getPathnameWithDots(origin)).toBe("/");
    expect(getPathnameWithDots(`${origin}/`)).toBe("/");
  });

  it("should return if there's no '/./' or '/../' in pathname", () => {
    const expectedPathname = `/foo/bar/index.html`;
    expect(getPathnameWithDots(`${origin}${expectedPathname}`)).toBe(expectedPathname);
  });

  it.each(["/./", "/../"])("should include '%s' in pathname if it exists", (folderName) => {
    const expectedPathname = `/foo${folderName}bar/index.html`;
    expect(getPathnameWithDots(`${origin}${expectedPathname}`)).toBe(expectedPathname);
    expect(getPathnameWithDots(`${origin}${expectedPathname}?foo=bar`)).toBe(expectedPathname);
    expect(getPathnameWithDots(`${origin}${expectedPathname}#foo=bar`)).toBe(expectedPathname);
  });
});
