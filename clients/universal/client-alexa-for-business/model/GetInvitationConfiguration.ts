import { GetInvitationConfigurationInput } from "./GetInvitationConfigurationInput";
import { GetInvitationConfigurationOutput } from "./GetInvitationConfigurationOutput";
import { NotFoundException } from "./NotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetInvitationConfiguration: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetInvitationConfiguration",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetInvitationConfigurationInput
  },
  output: {
    shape: GetInvitationConfigurationOutput
  },
  errors: [
    {
      shape: NotFoundException
    }
  ]
};
