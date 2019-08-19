import { AddTagsInput } from "../shapes/AddTagsInput";
import { AddTagsOutput } from "../shapes/AddTagsOutput";
import { AccessPointNotFoundException } from "../shapes/AccessPointNotFoundException";
import { TooManyTagsException } from "../shapes/TooManyTagsException";
import { DuplicateTagKeysException } from "../shapes/DuplicateTagKeysException";
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
      shape: AccessPointNotFoundException
    },
    {
      shape: TooManyTagsException
    },
    {
      shape: DuplicateTagKeysException
    }
  ]
};
