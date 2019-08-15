import { DeleteBGPPeerInput } from "../shapes/DeleteBGPPeerInput";
import { DeleteBGPPeerOutput } from "../shapes/DeleteBGPPeerOutput";
import { DirectConnectServerException } from "../shapes/DirectConnectServerException";
import { DirectConnectClientException } from "../shapes/DirectConnectClientException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteBGPPeer: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteBGPPeer",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteBGPPeerInput
  },
  output: {
    shape: DeleteBGPPeerOutput
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
