import { AddTagsInput } from "./AddTagsInput";
import { AddTagsOutput } from "./AddTagsOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
    shape: AddTagsOutput
  },
  errors: []
};
