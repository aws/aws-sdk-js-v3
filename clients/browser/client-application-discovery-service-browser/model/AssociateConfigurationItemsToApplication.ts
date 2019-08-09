import { AssociateConfigurationItemsToApplicationInput } from "./AssociateConfigurationItemsToApplicationInput";
import { AssociateConfigurationItemsToApplicationOutput } from "./AssociateConfigurationItemsToApplicationOutput";
import { AuthorizationErrorException } from "./AuthorizationErrorException";
import { InvalidParameterException } from "./InvalidParameterException";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { ServerInternalErrorException } from "./ServerInternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const AssociateConfigurationItemsToApplication: _Operation_ = {
  metadata: ServiceMetadata,
  name: "AssociateConfigurationItemsToApplication",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: AssociateConfigurationItemsToApplicationInput
  },
  output: {
    shape: AssociateConfigurationItemsToApplicationOutput
  },
  errors: [
    {
      shape: AuthorizationErrorException
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
