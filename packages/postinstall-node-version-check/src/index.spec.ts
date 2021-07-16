import { emitWarningIfUnsupportedVersion } from "./emitWarningIfUnsupportedVersion";
jest.mock("./emitWarningIfUnsupportedVersion");

it("index", () => {
  require("./index");
  expect(emitWarningIfUnsupportedVersion).toHaveBeenCalledTimes(1);
  expect(emitWarningIfUnsupportedVersion).toHaveBeenCalledWith(process.version);
});
