import { GetParametersByPathInput } from "./GetParametersByPathInput";
import { GetParametersByPathOutput } from "./GetParametersByPathOutput";
import { InternalServerError } from "./InternalServerError";
import { InvalidFilterKey } from "./InvalidFilterKey";
import { InvalidFilterOption } from "./InvalidFilterOption";
import { InvalidFilterValue } from "./InvalidFilterValue";
import { InvalidKeyId } from "./InvalidKeyId";
import { InvalidNextToken } from "./InvalidNextToken";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetParametersByPath: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetParametersByPath",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetParametersByPathInput
  },
  output: {
    shape: GetParametersByPathOutput
  },
  errors: [
    {
      shape: InternalServerError
    },
    {
      shape: InvalidFilterKey
    },
    {
      shape: InvalidFilterOption
    },
    {
      shape: InvalidFilterValue
    },
    {
      shape: InvalidKeyId
    },
    {
      shape: InvalidNextToken
    }
  ]
};
