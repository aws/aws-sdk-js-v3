import { UpdateRoleInput } from "./UpdateRoleInput";
import { UpdateRoleOutput } from "./UpdateRoleOutput";
import { UnmodifiableEntityException } from "./UnmodifiableEntityException";
import { NoSuchEntityException } from "./NoSuchEntityException";
import { ServiceFailureException } from "./ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
