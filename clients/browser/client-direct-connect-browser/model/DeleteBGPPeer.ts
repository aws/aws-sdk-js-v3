import { DeleteBGPPeerInput } from "./DeleteBGPPeerInput";
import { DeleteBGPPeerOutput } from "./DeleteBGPPeerOutput";
import { DirectConnectServerException } from "./DirectConnectServerException";
import { DirectConnectClientException } from "./DirectConnectClientException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
