import { SendSSHPublicKeyInput } from "./SendSSHPublicKeyInput";
import { SendSSHPublicKeyOutput } from "./SendSSHPublicKeyOutput";
import { AuthException } from "./AuthException";
import { InvalidArgsException } from "./InvalidArgsException";
import { ServiceException } from "./ServiceException";
import { ThrottlingException } from "./ThrottlingException";
import { EC2InstanceNotFoundException } from "./EC2InstanceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const SendSSHPublicKey: _Operation_ = {
  metadata: ServiceMetadata,
  name: "SendSSHPublicKey",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: SendSSHPublicKeyInput
  },
  output: {
    shape: SendSSHPublicKeyOutput
  },
  errors: [
    {
      shape: AuthException
    },
    {
      shape: InvalidArgsException
    },
    {
      shape: ServiceException
    },
    {
      shape: ThrottlingException
    },
    {
      shape: EC2InstanceNotFoundException
    }
  ]
};
