import { GetInvitationConfigurationInput } from "../shapes/GetInvitationConfigurationInput";
import { GetInvitationConfigurationOutput } from "../shapes/GetInvitationConfigurationOutput";
import { NotFoundException } from "../shapes/NotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
