import { CreateBGPPeerInput } from "../shapes/CreateBGPPeerInput";
import { CreateBGPPeerOutput } from "../shapes/CreateBGPPeerOutput";
import { DirectConnectServerException } from "../shapes/DirectConnectServerException";
import { DirectConnectClientException } from "../shapes/DirectConnectClientException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateBGPPeer: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateBGPPeer",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateBGPPeerInput
  },
  output: {
    shape: CreateBGPPeerOutput
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
