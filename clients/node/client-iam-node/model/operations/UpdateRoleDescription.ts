import { UpdateRoleDescriptionInput } from "../shapes/UpdateRoleDescriptionInput";
import { UpdateRoleDescriptionOutput } from "../shapes/UpdateRoleDescriptionOutput";
import { NoSuchEntityException } from "../shapes/NoSuchEntityException";
import { UnmodifiableEntityException } from "../shapes/UnmodifiableEntityException";
import { ServiceFailureException } from "../shapes/ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
