import { AssociateTeamMemberInput } from "./AssociateTeamMemberInput";
import { AssociateTeamMemberOutput } from "./AssociateTeamMemberOutput";
import { LimitExceededException } from "./LimitExceededException";
import { ProjectNotFoundException } from "./ProjectNotFoundException";
import { TeamMemberAlreadyAssociatedException } from "./TeamMemberAlreadyAssociatedException";
import { ValidationException } from "./ValidationException";
import { InvalidServiceRoleException } from "./InvalidServiceRoleException";
import { ProjectConfigurationException } from "./ProjectConfigurationException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
