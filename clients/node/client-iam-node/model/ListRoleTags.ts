import { ListRoleTagsInput } from "./ListRoleTagsInput";
import { ListRoleTagsOutput } from "./ListRoleTagsOutput";
import { NoSuchEntityException } from "./NoSuchEntityException";
import { ServiceFailureException } from "./ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
