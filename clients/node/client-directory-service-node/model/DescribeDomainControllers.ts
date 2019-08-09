import { DescribeDomainControllersInput } from "./DescribeDomainControllersInput";
import { DescribeDomainControllersOutput } from "./DescribeDomainControllersOutput";
import { EntityDoesNotExistException } from "./EntityDoesNotExistException";
import { InvalidNextTokenException } from "./InvalidNextTokenException";
import { InvalidParameterException } from "./InvalidParameterException";
import { ClientException } from "./ClientException";
import { ServiceException } from "./ServiceException";
import { UnsupportedOperationException } from "./UnsupportedOperationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
