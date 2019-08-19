import { GetClassifierInput } from "../shapes/GetClassifierInput";
import { GetClassifierOutput } from "../shapes/GetClassifierOutput";
import { EntityNotFoundException } from "../shapes/EntityNotFoundException";
import { OperationTimeoutException } from "../shapes/OperationTimeoutException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetClassifier: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetClassifier",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetClassifierInput
  },
  output: {
    shape: GetClassifierOutput
  },
  errors: [
    {
      shape: EntityNotFoundException
    },
    {
      shape: OperationTimeoutException
    }
  ]
};
