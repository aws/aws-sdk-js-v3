import { DisassociateConfigurationItemsFromApplicationInput } from "../shapes/DisassociateConfigurationItemsFromApplicationInput";
import { DisassociateConfigurationItemsFromApplicationOutput } from "../shapes/DisassociateConfigurationItemsFromApplicationOutput";
import { AuthorizationErrorException } from "../shapes/AuthorizationErrorException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { ServerInternalErrorException } from "../shapes/ServerInternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DisassociateConfigurationItemsFromApplication: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DisassociateConfigurationItemsFromApplication",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DisassociateConfigurationItemsFromApplicationInput
  },
  output: {
    shape: DisassociateConfigurationItemsFromApplicationOutput
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
