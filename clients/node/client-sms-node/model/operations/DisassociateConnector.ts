import { DisassociateConnectorInput } from "../shapes/DisassociateConnectorInput";
import { DisassociateConnectorOutput } from "../shapes/DisassociateConnectorOutput";
import { MissingRequiredParameterException } from "../shapes/MissingRequiredParameterException";
import { UnauthorizedOperationException } from "../shapes/UnauthorizedOperationException";
import { OperationNotPermittedException } from "../shapes/OperationNotPermittedException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DisassociateConnector: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DisassociateConnector",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DisassociateConnectorInput
  },
  output: {
    shape: DisassociateConnectorOutput
  },
  errors: [
    {
      shape: MissingRequiredParameterException
    },
    {
      shape: UnauthorizedOperationException
    },
    {
      shape: OperationNotPermittedException
    },
    {
      shape: InvalidParameterException
    }
  ]
};
