import { AddTagsInput } from "../shapes/AddTagsInput";
import { AddTagsOutput } from "../shapes/AddTagsOutput";
import { DuplicateTagKeysException } from "../shapes/DuplicateTagKeysException";
import { TooManyTagsException } from "../shapes/TooManyTagsException";
import { LoadBalancerNotFoundException } from "../shapes/LoadBalancerNotFoundException";
import { TargetGroupNotFoundException } from "../shapes/TargetGroupNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const AddTags: _Operation_ = {
  metadata: ServiceMetadata,
  name: "AddTags",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: AddTagsInput
  },
  output: {
    shape: AddTagsOutput,
    resultWrapper: "AddTagsResult"
  },
  errors: [
    {
      shape: DuplicateTagKeysException
    },
    {
      shape: TooManyTagsException
    },
    {
      shape: LoadBalancerNotFoundException
    },
    {
      shape: TargetGroupNotFoundException
    }
  ]
};
