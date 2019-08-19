import { CreateTagsInput } from "../shapes/CreateTagsInput";
import { CreateTagsOutput } from "../shapes/CreateTagsOutput";
import { TagLimitExceededFault } from "../shapes/TagLimitExceededFault";
import { ResourceNotFoundFault } from "../shapes/ResourceNotFoundFault";
import { InvalidTagFault } from "../shapes/InvalidTagFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
