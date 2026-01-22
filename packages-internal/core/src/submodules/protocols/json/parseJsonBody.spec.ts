import { describe, expect, test as it } from "vitest";

import { loadRestJsonErrorCode } from "./parseJsonBody";

describe(loadRestJsonErrorCode.name, () => {
  it("reads the code of the error case-insensitively", () => {
    const code = loadRestJsonErrorCode(
      { statusCode: 200, headers: {} },
      {
        cOdE: "OhNoException:Sender",
      }
    );
    expect(code).toEqual("OhNoException");
  });
});
