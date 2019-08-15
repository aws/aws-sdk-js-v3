import { ListConfigurationsInput } from "../shapes/ListConfigurationsInput";
import { ListConfigurationsOutput } from "../shapes/ListConfigurationsOutput";
import { AuthorizationErrorException } from "../shapes/AuthorizationErrorException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { ServerInternalErrorException } from "../shapes/ServerInternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListConfigurations: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListConfigurations",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListConfigurationsInput
  },
  output: {
    shape: ListConfigurationsOutput
  },
  errors: [
    {
      shape: AuthorizationErrorException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: InvalidParameterException
    },
    {
      shape: InvalidParameterValueException
    },
    {
      shape: ServerInternalErrorException
    }
  ]
};
