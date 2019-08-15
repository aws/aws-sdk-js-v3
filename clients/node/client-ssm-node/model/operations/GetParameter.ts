import { GetParameterInput } from "../shapes/GetParameterInput";
import { GetParameterOutput } from "../shapes/GetParameterOutput";
import { InternalServerError } from "../shapes/InternalServerError";
import { InvalidKeyId } from "../shapes/InvalidKeyId";
import { ParameterNotFound } from "../shapes/ParameterNotFound";
import { ParameterVersionNotFound } from "../shapes/ParameterVersionNotFound";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetParameter: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetParameter",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetParameterInput
  },
  output: {
    shape: GetParameterOutput
  },
  errors: [
    {
      shape: InternalServerError
    },
    {
      shape: InvalidKeyId
    },
    {
      shape: ParameterNotFound
    },
    {
      shape: ParameterVersionNotFound
    }
  ]
};
