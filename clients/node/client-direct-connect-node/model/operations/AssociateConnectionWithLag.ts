import { AssociateConnectionWithLagInput } from "../shapes/AssociateConnectionWithLagInput";
import { AssociateConnectionWithLagOutput } from "../shapes/AssociateConnectionWithLagOutput";
import { DirectConnectServerException } from "../shapes/DirectConnectServerException";
import { DirectConnectClientException } from "../shapes/DirectConnectClientException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
