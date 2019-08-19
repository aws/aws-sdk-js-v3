import { GetConsoleScreenshotInput } from "../shapes/GetConsoleScreenshotInput";
import { GetConsoleScreenshotOutput } from "../shapes/GetConsoleScreenshotOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetConsoleScreenshot: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetConsoleScreenshot",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetConsoleScreenshotInput
  },
  output: {
    shape: GetConsoleScreenshotOutput
  },
  errors: []
};
