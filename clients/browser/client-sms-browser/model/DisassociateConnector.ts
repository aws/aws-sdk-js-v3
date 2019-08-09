import { DisassociateConnectorInput } from "./DisassociateConnectorInput";
import { DisassociateConnectorOutput } from "./DisassociateConnectorOutput";
import { MissingRequiredParameterException } from "./MissingRequiredParameterException";
import { UnauthorizedOperationException } from "./UnauthorizedOperationException";
import { OperationNotPermittedException } from "./OperationNotPermittedException";
import { InvalidParameterException } from "./InvalidParameterException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
