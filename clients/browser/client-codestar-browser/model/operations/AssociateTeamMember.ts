import { AssociateTeamMemberInput } from "../shapes/AssociateTeamMemberInput";
import { AssociateTeamMemberOutput } from "../shapes/AssociateTeamMemberOutput";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { ProjectNotFoundException } from "../shapes/ProjectNotFoundException";
import { TeamMemberAlreadyAssociatedException } from "../shapes/TeamMemberAlreadyAssociatedException";
import { ValidationException } from "../shapes/ValidationException";
import { InvalidServiceRoleException } from "../shapes/InvalidServiceRoleException";
import { ProjectConfigurationException } from "../shapes/ProjectConfigurationException";
import { ConcurrentModificationException } from "../shapes/ConcurrentModificationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const AssociateTeamMember: _Operation_ = {
  metadata: ServiceMetadata,
  name: "AssociateTeamMember",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: AssociateTeamMemberInput
  },
  output: {
    shape: AssociateTeamMemberOutput
  },
  errors: [
    {
      shape: LimitExceededException
    },
    {
      shape: ProjectNotFoundException
    },
    {
      shape: TeamMemberAlreadyAssociatedException
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
    }
  ]
};
