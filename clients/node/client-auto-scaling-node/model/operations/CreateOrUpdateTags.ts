import { CreateOrUpdateTagsInput } from "../shapes/CreateOrUpdateTagsInput";
import { CreateOrUpdateTagsOutput } from "../shapes/CreateOrUpdateTagsOutput";
import { LimitExceededFault } from "../shapes/LimitExceededFault";
import { AlreadyExistsFault } from "../shapes/AlreadyExistsFault";
import { ResourceContentionFault } from "../shapes/ResourceContentionFault";
import { ResourceInUseFault } from "../shapes/ResourceInUseFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
