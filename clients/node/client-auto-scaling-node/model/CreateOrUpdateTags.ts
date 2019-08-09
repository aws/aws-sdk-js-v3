import { CreateOrUpdateTagsInput } from "./CreateOrUpdateTagsInput";
import { CreateOrUpdateTagsOutput } from "./CreateOrUpdateTagsOutput";
import { LimitExceededFault } from "./LimitExceededFault";
import { AlreadyExistsFault } from "./AlreadyExistsFault";
import { ResourceContentionFault } from "./ResourceContentionFault";
import { ResourceInUseFault } from "./ResourceInUseFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateOrUpdateTags: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateOrUpdateTags",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateOrUpdateTagsInput
  },
  output: {
    shape: CreateOrUpdateTagsOutput
  },
  errors: [
    {
      shape: LimitExceededFault
    },
    {
      shape: AlreadyExistsFault
    },
    {
      shape: ResourceContentionFault
    },
    {
      shape: ResourceInUseFault
    }
  ]
};
