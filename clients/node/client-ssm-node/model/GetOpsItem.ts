import { GetOpsItemInput } from "./GetOpsItemInput";
import { GetOpsItemOutput } from "./GetOpsItemOutput";
import { InternalServerError } from "./InternalServerError";
import { OpsItemNotFoundException } from "./OpsItemNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetOpsItem: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetOpsItem",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetOpsItemInput
  },
  output: {
    shape: GetOpsItemOutput
  },
  errors: [
    {
      shape: InternalServerError
    },
    {
      shape: OpsItemNotFoundException
    }
  ]
};
