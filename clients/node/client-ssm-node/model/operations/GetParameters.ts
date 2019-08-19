import { GetParametersInput } from "../shapes/GetParametersInput";
import { GetParametersOutput } from "../shapes/GetParametersOutput";
import { InvalidKeyId } from "../shapes/InvalidKeyId";
import { InternalServerError } from "../shapes/InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
