import { ListDeploymentGroupsInput } from "./ListDeploymentGroupsInput";
import { ListDeploymentGroupsOutput } from "./ListDeploymentGroupsOutput";
import { ApplicationNameRequiredException } from "./ApplicationNameRequiredException";
import { InvalidApplicationNameException } from "./InvalidApplicationNameException";
import { ApplicationDoesNotExistException } from "./ApplicationDoesNotExistException";
import { InvalidNextTokenException } from "./InvalidNextTokenException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListDeploymentGroups: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListDeploymentGroups",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListDeploymentGroupsInput
  },
  output: {
    shape: ListDeploymentGroupsOutput
  },
  errors: [
    {
      shape: ApplicationNameRequiredException
    },
    {
      shape: InvalidApplicationNameException
    },
    {
      shape: ApplicationDoesNotExistException
    },
    {
      shape: InvalidNextTokenException
    }
  ]
};
