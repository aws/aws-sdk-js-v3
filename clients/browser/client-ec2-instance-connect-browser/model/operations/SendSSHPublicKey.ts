import { SendSSHPublicKeyInput } from "../shapes/SendSSHPublicKeyInput";
import { SendSSHPublicKeyOutput } from "../shapes/SendSSHPublicKeyOutput";
import { AuthException } from "../shapes/AuthException";
import { InvalidArgsException } from "../shapes/InvalidArgsException";
import { ServiceException } from "../shapes/ServiceException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { EC2InstanceNotFoundException } from "../shapes/EC2InstanceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
