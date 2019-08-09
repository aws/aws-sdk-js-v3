import { UpdateTeamMemberInput } from "./UpdateTeamMemberInput";
import { UpdateTeamMemberOutput } from "./UpdateTeamMemberOutput";
import { LimitExceededException } from "./LimitExceededException";
import { ProjectNotFoundException } from "./ProjectNotFoundException";
import { ValidationException } from "./ValidationException";
import { InvalidServiceRoleException } from "./InvalidServiceRoleException";
import { ProjectConfigurationException } from "./ProjectConfigurationException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { TeamMemberNotFoundException } from "./TeamMemberNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const UpdateTeamMember: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateTeamMember",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateTeamMemberInput
  },
  output: {
    shape: UpdateTeamMemberOutput
  },
  errors: [
    {
      shape: LimitExceededException
    },
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
      shape: ProjectConfigurationException
    },
    {
      shape: ConcurrentModificationException
    },
    {
      shape: TeamMemberNotFoundException
    }
  ]
};
