import { DescribeTrustsInput } from "./DescribeTrustsInput";
import { DescribeTrustsOutput } from "./DescribeTrustsOutput";
import { EntityDoesNotExistException } from "./EntityDoesNotExistException";
import { InvalidNextTokenException } from "./InvalidNextTokenException";
import { InvalidParameterException } from "./InvalidParameterException";
import { ClientException } from "./ClientException";
import { ServiceException } from "./ServiceException";
import { UnsupportedOperationException } from "./UnsupportedOperationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
