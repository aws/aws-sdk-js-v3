import { ListUserTagsInput } from "./ListUserTagsInput";
import { ListUserTagsOutput } from "./ListUserTagsOutput";
import { NoSuchEntityException } from "./NoSuchEntityException";
import { ServiceFailureException } from "./ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListUserTags: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListUserTags",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListUserTagsInput
  },
  output: {
    shape: ListUserTagsOutput,
    resultWrapper: "ListUserTagsResult"
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
