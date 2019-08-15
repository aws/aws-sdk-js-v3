import { DescribeTrustsInput } from "../shapes/DescribeTrustsInput";
import { DescribeTrustsOutput } from "../shapes/DescribeTrustsOutput";
import { EntityDoesNotExistException } from "../shapes/EntityDoesNotExistException";
import { InvalidNextTokenException } from "../shapes/InvalidNextTokenException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { ClientException } from "../shapes/ClientException";
import { ServiceException } from "../shapes/ServiceException";
import { UnsupportedOperationException } from "../shapes/UnsupportedOperationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeTrusts: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeTrusts",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeTrustsInput
  },
  output: {
    shape: DescribeTrustsOutput
  },
  errors: [
    {
      shape: EntityDoesNotExistException
    },
    {
      shape: InvalidNextTokenException
    },
    {
      shape: InvalidParameterException
    },
    {
      shape: ClientException
    },
    {
      shape: ServiceException
    },
    {
      shape: UnsupportedOperationException
    }
  ]
};
