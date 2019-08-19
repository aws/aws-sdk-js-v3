import { GetOperationInput } from "../shapes/GetOperationInput";
import { GetOperationOutput } from "../shapes/GetOperationOutput";
import { InvalidInput } from "../shapes/InvalidInput";
import { OperationNotFound } from "../shapes/OperationNotFound";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetOperation: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetOperation",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetOperationInput
  },
  output: {
    shape: GetOperationOutput
  },
  errors: [
    {
      shape: InvalidInput
    },
    {
      shape: OperationNotFound
    }
  ]
};
