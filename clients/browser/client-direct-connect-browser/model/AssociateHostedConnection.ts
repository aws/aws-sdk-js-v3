import { AssociateHostedConnectionInput } from "./AssociateHostedConnectionInput";
import { AssociateHostedConnectionOutput } from "./AssociateHostedConnectionOutput";
import { DirectConnectServerException } from "./DirectConnectServerException";
import { DirectConnectClientException } from "./DirectConnectClientException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
