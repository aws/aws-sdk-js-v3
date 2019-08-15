import { GetAccessKeyLastUsedInput } from "../shapes/GetAccessKeyLastUsedInput";
import { GetAccessKeyLastUsedOutput } from "../shapes/GetAccessKeyLastUsedOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetAccessKeyLastUsed: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetAccessKeyLastUsed",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetAccessKeyLastUsedInput
  },
  output: {
    shape: GetAccessKeyLastUsedOutput,
    resultWrapper: "GetAccessKeyLastUsedResult"
  },
  errors: []
};
