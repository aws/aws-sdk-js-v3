import { GetParameterHistoryInput } from "../shapes/GetParameterHistoryInput";
import { GetParameterHistoryOutput } from "../shapes/GetParameterHistoryOutput";
import { InternalServerError } from "../shapes/InternalServerError";
import { ParameterNotFound } from "../shapes/ParameterNotFound";
import { InvalidNextToken } from "../shapes/InvalidNextToken";
import { InvalidKeyId } from "../shapes/InvalidKeyId";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetParameterHistory: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetParameterHistory",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetParameterHistoryInput
  },
  output: {
    shape: GetParameterHistoryOutput
  },
  errors: [
    {
      shape: InternalServerError
    },
    {
      shape: ParameterNotFound
    },
    {
      shape: InvalidNextToken
    },
    {
      shape: InvalidKeyId
    }
  ]
};
