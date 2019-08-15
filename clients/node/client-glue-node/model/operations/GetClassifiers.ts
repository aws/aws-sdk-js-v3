import { GetClassifiersInput } from "../shapes/GetClassifiersInput";
import { GetClassifiersOutput } from "../shapes/GetClassifiersOutput";
import { OperationTimeoutException } from "../shapes/OperationTimeoutException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetClassifiers: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetClassifiers",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetClassifiersInput
  },
  output: {
    shape: GetClassifiersOutput
  },
  errors: [
    {
      shape: OperationTimeoutException
    }
  ]
};
