import { GetSnowballUsageInput } from "./GetSnowballUsageInput";
import { GetSnowballUsageOutput } from "./GetSnowballUsageOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetSnowballUsage: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetSnowballUsage",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetSnowballUsageInput
  },
  output: {
    shape: GetSnowballUsageOutput
  },
  errors: []
};
