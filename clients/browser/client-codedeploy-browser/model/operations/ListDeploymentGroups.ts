import { ListDeploymentGroupsInput } from "../shapes/ListDeploymentGroupsInput";
import { ListDeploymentGroupsOutput } from "../shapes/ListDeploymentGroupsOutput";
import { ApplicationNameRequiredException } from "../shapes/ApplicationNameRequiredException";
import { InvalidApplicationNameException } from "../shapes/InvalidApplicationNameException";
import { ApplicationDoesNotExistException } from "../shapes/ApplicationDoesNotExistException";
import { InvalidNextTokenException } from "../shapes/InvalidNextTokenException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
