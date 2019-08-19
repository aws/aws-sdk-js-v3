import { UpdateRoleInput } from "../shapes/UpdateRoleInput";
import { UpdateRoleOutput } from "../shapes/UpdateRoleOutput";
import { UnmodifiableEntityException } from "../shapes/UnmodifiableEntityException";
import { NoSuchEntityException } from "../shapes/NoSuchEntityException";
import { ServiceFailureException } from "../shapes/ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateRole: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateRole",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateRoleInput
  },
  output: {
    shape: UpdateRoleOutput,
    resultWrapper: "UpdateRoleResult"
  },
  errors: [
    {
      shape: UnmodifiableEntityException
    },
    {
      shape: NoSuchEntityException
    },
    {
      shape: ServiceFailureException
    }
  ]
};
