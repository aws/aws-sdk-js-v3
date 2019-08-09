import { DisassociateConfigurationItemsFromApplicationInput } from "./DisassociateConfigurationItemsFromApplicationInput";
import { DisassociateConfigurationItemsFromApplicationOutput } from "./DisassociateConfigurationItemsFromApplicationOutput";
import { AuthorizationErrorException } from "./AuthorizationErrorException";
import { InvalidParameterException } from "./InvalidParameterException";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { ServerInternalErrorException } from "./ServerInternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
