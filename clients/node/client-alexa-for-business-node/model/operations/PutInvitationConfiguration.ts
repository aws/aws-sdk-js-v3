import { PutInvitationConfigurationInput } from "../shapes/PutInvitationConfigurationInput";
import { PutInvitationConfigurationOutput } from "../shapes/PutInvitationConfigurationOutput";
import { NotFoundException } from "../shapes/NotFoundException";
import { ConcurrentModificationException } from "../shapes/ConcurrentModificationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const PutInvitationConfiguration: _Operation_ = {
  metadata: ServiceMetadata,
  name: "PutInvitationConfiguration",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: PutInvitationConfigurationInput
  },
  output: {
    shape: PutInvitationConfigurationOutput
  },
  errors: [
    {
      shape: NotFoundException
    },
    {
      shape: ConcurrentModificationException
    }
  ]
};
