import { ListConfigurationsInput } from "./ListConfigurationsInput";
import { ListConfigurationsOutput } from "./ListConfigurationsOutput";
import { AuthorizationErrorException } from "./AuthorizationErrorException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidParameterException } from "./InvalidParameterException";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { ServerInternalErrorException } from "./ServerInternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
