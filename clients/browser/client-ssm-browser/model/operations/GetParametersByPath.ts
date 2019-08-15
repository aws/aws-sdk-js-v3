import { GetParametersByPathInput } from "../shapes/GetParametersByPathInput";
import { GetParametersByPathOutput } from "../shapes/GetParametersByPathOutput";
import { InternalServerError } from "../shapes/InternalServerError";
import { InvalidFilterKey } from "../shapes/InvalidFilterKey";
import { InvalidFilterOption } from "../shapes/InvalidFilterOption";
import { InvalidFilterValue } from "../shapes/InvalidFilterValue";
import { InvalidKeyId } from "../shapes/InvalidKeyId";
import { InvalidNextToken } from "../shapes/InvalidNextToken";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
