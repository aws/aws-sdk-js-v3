import { ListTeamMembersInput } from "./ListTeamMembersInput";
import { ListTeamMembersOutput } from "./ListTeamMembersOutput";
import { ProjectNotFoundException } from "./ProjectNotFoundException";
import { InvalidNextTokenException } from "./InvalidNextTokenException";
import { ValidationException } from "./ValidationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
