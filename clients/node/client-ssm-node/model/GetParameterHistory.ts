import { GetParameterHistoryInput } from "./GetParameterHistoryInput";
import { GetParameterHistoryOutput } from "./GetParameterHistoryOutput";
import { InternalServerError } from "./InternalServerError";
import { ParameterNotFound } from "./ParameterNotFound";
import { InvalidNextToken } from "./InvalidNextToken";
import { InvalidKeyId } from "./InvalidKeyId";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
