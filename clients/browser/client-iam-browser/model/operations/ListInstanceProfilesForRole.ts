import { ListInstanceProfilesForRoleInput } from "../shapes/ListInstanceProfilesForRoleInput";
import { ListInstanceProfilesForRoleOutput } from "../shapes/ListInstanceProfilesForRoleOutput";
import { NoSuchEntityException } from "../shapes/NoSuchEntityException";
import { ServiceFailureException } from "../shapes/ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListInstanceProfilesForRole: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListInstanceProfilesForRole",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListInstanceProfilesForRoleInput
  },
  output: {
    shape: ListInstanceProfilesForRoleOutput,
    resultWrapper: "ListInstanceProfilesForRoleResult"
  },
  errors: [
    {
      shape: NoSuchEntityException
    },
    {
      shape: ServiceFailureException
    }
  ]
};
