import { GetParameterInput } from "./GetParameterInput";
import { GetParameterOutput } from "./GetParameterOutput";
import { InternalServerError } from "./InternalServerError";
import { InvalidKeyId } from "./InvalidKeyId";
import { ParameterNotFound } from "./ParameterNotFound";
import { ParameterVersionNotFound } from "./ParameterVersionNotFound";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
