import { GetParametersInput } from "./GetParametersInput";
import { GetParametersOutput } from "./GetParametersOutput";
import { InvalidKeyId } from "./InvalidKeyId";
import { InternalServerError } from "./InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetParameters: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetParameters",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetParametersInput
  },
  output: {
    shape: GetParametersOutput
  },
  errors: [
    {
      shape: InvalidKeyId
    },
    {
      shape: InternalServerError
    }
  ]
};
