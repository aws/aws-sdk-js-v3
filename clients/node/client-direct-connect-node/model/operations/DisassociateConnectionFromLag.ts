import { DisassociateConnectionFromLagInput } from "../shapes/DisassociateConnectionFromLagInput";
import { DisassociateConnectionFromLagOutput } from "../shapes/DisassociateConnectionFromLagOutput";
import { DirectConnectServerException } from "../shapes/DirectConnectServerException";
import { DirectConnectClientException } from "../shapes/DirectConnectClientException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DisassociateConnectionFromLag: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DisassociateConnectionFromLag",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DisassociateConnectionFromLagInput
  },
  output: {
    shape: DisassociateConnectionFromLagOutput
  },
  errors: [
    {
      shape: DirectConnectServerException
    },
    {
      shape: DirectConnectClientException
    }
  ]
};
