import { ListTeamMembersInput } from "../shapes/ListTeamMembersInput";
import { ListTeamMembersOutput } from "../shapes/ListTeamMembersOutput";
import { ProjectNotFoundException } from "../shapes/ProjectNotFoundException";
import { InvalidNextTokenException } from "../shapes/InvalidNextTokenException";
import { ValidationException } from "../shapes/ValidationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListTeamMembers: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListTeamMembers",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListTeamMembersInput
  },
  output: {
    shape: ListTeamMembersOutput
  },
  errors: [
    {
      shape: ProjectNotFoundException
    },
    {
      shape: InvalidNextTokenException
    },
    {
      shape: ValidationException
    }
  ]
};
