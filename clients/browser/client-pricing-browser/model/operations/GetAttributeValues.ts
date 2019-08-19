import { GetAttributeValuesInput } from "../shapes/GetAttributeValuesInput";
import { GetAttributeValuesOutput } from "../shapes/GetAttributeValuesOutput";
import { InternalErrorException } from "../shapes/InternalErrorException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { NotFoundException } from "../shapes/NotFoundException";
import { InvalidNextTokenException } from "../shapes/InvalidNextTokenException";
import { ExpiredNextTokenException } from "../shapes/ExpiredNextTokenException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
