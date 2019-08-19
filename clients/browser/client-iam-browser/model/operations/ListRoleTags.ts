import { ListRoleTagsInput } from "../shapes/ListRoleTagsInput";
import { ListRoleTagsOutput } from "../shapes/ListRoleTagsOutput";
import { NoSuchEntityException } from "../shapes/NoSuchEntityException";
import { ServiceFailureException } from "../shapes/ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListRoleTags: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListRoleTags",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListRoleTagsInput
  },
  output: {
    shape: ListRoleTagsOutput,
    resultWrapper: "ListRoleTagsResult"
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
