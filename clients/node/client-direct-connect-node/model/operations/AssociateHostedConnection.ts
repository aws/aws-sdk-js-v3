import { AssociateHostedConnectionInput } from "../shapes/AssociateHostedConnectionInput";
import { AssociateHostedConnectionOutput } from "../shapes/AssociateHostedConnectionOutput";
import { DirectConnectServerException } from "../shapes/DirectConnectServerException";
import { DirectConnectClientException } from "../shapes/DirectConnectClientException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const AssociateHostedConnection: _Operation_ = {
  metadata: ServiceMetadata,
  name: "AssociateHostedConnection",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: AssociateHostedConnectionInput
  },
  output: {
    shape: AssociateHostedConnectionOutput
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
