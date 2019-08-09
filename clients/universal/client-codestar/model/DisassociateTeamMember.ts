import { DisassociateTeamMemberInput } from "./DisassociateTeamMemberInput";
import { DisassociateTeamMemberOutput } from "./DisassociateTeamMemberOutput";
import { ProjectNotFoundException } from "./ProjectNotFoundException";
import { ValidationException } from "./ValidationException";
import { InvalidServiceRoleException } from "./InvalidServiceRoleException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DisassociateTeamMember: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DisassociateTeamMember",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DisassociateTeamMemberInput
  },
  output: {
    shape: DisassociateTeamMemberOutput
  },
  errors: [
    {
      shape: ProjectNotFoundException
    },
    {
      shape: ValidationException
    },
    {
      shape: InvalidServiceRoleException
    },
    {
      shape: ConcurrentModificationException
    }
  ]
};
