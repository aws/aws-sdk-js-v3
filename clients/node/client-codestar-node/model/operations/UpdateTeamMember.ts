import { UpdateTeamMemberInput } from "../shapes/UpdateTeamMemberInput";
import { UpdateTeamMemberOutput } from "../shapes/UpdateTeamMemberOutput";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { ProjectNotFoundException } from "../shapes/ProjectNotFoundException";
import { ValidationException } from "../shapes/ValidationException";
import { InvalidServiceRoleException } from "../shapes/InvalidServiceRoleException";
import { ProjectConfigurationException } from "../shapes/ProjectConfigurationException";
import { ConcurrentModificationException } from "../shapes/ConcurrentModificationException";
import { TeamMemberNotFoundException } from "../shapes/TeamMemberNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
