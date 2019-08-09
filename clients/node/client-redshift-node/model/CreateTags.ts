import { CreateTagsInput } from "./CreateTagsInput";
import { CreateTagsOutput } from "./CreateTagsOutput";
import { TagLimitExceededFault } from "./TagLimitExceededFault";
import { ResourceNotFoundFault } from "./ResourceNotFoundFault";
import { InvalidTagFault } from "./InvalidTagFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateTags: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateTags",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateTagsInput
  },
  output: {
    shape: CreateTagsOutput
  },
  errors: [
    {
      shape: TagLimitExceededFault
    },
    {
      shape: ResourceNotFoundFault
    },
    {
      shape: InvalidTagFault
    }
  ]
};
