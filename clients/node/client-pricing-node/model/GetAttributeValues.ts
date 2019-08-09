import { GetAttributeValuesInput } from "./GetAttributeValuesInput";
import { GetAttributeValuesOutput } from "./GetAttributeValuesOutput";
import { InternalErrorException } from "./InternalErrorException";
import { InvalidParameterException } from "./InvalidParameterException";
import { NotFoundException } from "./NotFoundException";
import { InvalidNextTokenException } from "./InvalidNextTokenException";
import { ExpiredNextTokenException } from "./ExpiredNextTokenException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetAttributeValues: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetAttributeValues",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetAttributeValuesInput
  },
  output: {
    shape: GetAttributeValuesOutput
  },
  errors: [
    {
      shape: InternalErrorException
    },
    {
      shape: InvalidParameterException
    },
    {
      shape: NotFoundException
    },
    {
      shape: InvalidNextTokenException
    },
    {
      shape: ExpiredNextTokenException
    }
  ]
};
