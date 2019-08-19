import { GetConsoleOutputInput } from "../shapes/GetConsoleOutputInput";
import { GetConsoleOutputOutput } from "../shapes/GetConsoleOutputOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetConsoleOutput: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetConsoleOutput",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetConsoleOutputInput
  },
  output: {
    shape: GetConsoleOutputOutput
  },
  errors: []
};
