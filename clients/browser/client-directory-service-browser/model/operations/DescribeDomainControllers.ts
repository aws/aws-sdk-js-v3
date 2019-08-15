import { DescribeDomainControllersInput } from "../shapes/DescribeDomainControllersInput";
import { DescribeDomainControllersOutput } from "../shapes/DescribeDomainControllersOutput";
import { EntityDoesNotExistException } from "../shapes/EntityDoesNotExistException";
import { InvalidNextTokenException } from "../shapes/InvalidNextTokenException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { ClientException } from "../shapes/ClientException";
import { ServiceException } from "../shapes/ServiceException";
import { UnsupportedOperationException } from "../shapes/UnsupportedOperationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeDomainControllers: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeDomainControllers",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeDomainControllersInput
  },
  output: {
    shape: DescribeDomainControllersOutput
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
