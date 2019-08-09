import { UpdateRoleDescriptionInput } from "./UpdateRoleDescriptionInput";
import { UpdateRoleDescriptionOutput } from "./UpdateRoleDescriptionOutput";
import { NoSuchEntityException } from "./NoSuchEntityException";
import { UnmodifiableEntityException } from "./UnmodifiableEntityException";
import { ServiceFailureException } from "./ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const UpdateRoleDescription: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateRoleDescription",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateRoleDescriptionInput
  },
  output: {
    shape: UpdateRoleDescriptionOutput,
    resultWrapper: "UpdateRoleDescriptionResult"
  },
  errors: [
    {
      shape: NoSuchEntityException
    },
    {
      shape: UnmodifiableEntityException
    },
    {
      shape: ServiceFailureException
    }
  ]
};
