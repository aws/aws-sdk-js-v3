import { AssociateConfigurationItemsToApplicationInput } from "../shapes/AssociateConfigurationItemsToApplicationInput";
import { AssociateConfigurationItemsToApplicationOutput } from "../shapes/AssociateConfigurationItemsToApplicationOutput";
import { AuthorizationErrorException } from "../shapes/AuthorizationErrorException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { ServerInternalErrorException } from "../shapes/ServerInternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
