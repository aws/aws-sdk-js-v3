import { AssociateConnectionWithLagInput } from "./AssociateConnectionWithLagInput";
import { AssociateConnectionWithLagOutput } from "./AssociateConnectionWithLagOutput";
import { DirectConnectServerException } from "./DirectConnectServerException";
import { DirectConnectClientException } from "./DirectConnectClientException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const AssociateConnectionWithLag: _Operation_ = {
  metadata: ServiceMetadata,
  name: "AssociateConnectionWithLag",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: AssociateConnectionWithLagInput
  },
  output: {
    shape: AssociateConnectionWithLagOutput
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
