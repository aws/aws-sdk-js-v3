import { RemoveTagsInput } from "../shapes/RemoveTagsInput";
import { RemoveTagsOutput } from "../shapes/RemoveTagsOutput";
import { AccessPointNotFoundException } from "../shapes/AccessPointNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const RemoveTags: _Operation_ = {
  metadata: ServiceMetadata,
  name: "RemoveTags",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: RemoveTagsInput
  },
  output: {
    shape: RemoveTagsOutput,
    resultWrapper: "RemoveTagsResult"
  },
  errors: [
    {
      shape: AccessPointNotFoundException
    }
  ]
};
