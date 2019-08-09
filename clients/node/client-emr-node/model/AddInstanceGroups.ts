import { AddInstanceGroupsInput } from "./AddInstanceGroupsInput";
import { AddInstanceGroupsOutput } from "./AddInstanceGroupsOutput";
import { InternalServerError } from "./InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const AddInstanceGroups: _Operation_ = {
  metadata: ServiceMetadata,
  name: "AddInstanceGroups",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: AddInstanceGroupsInput
  },
  output: {
    shape: AddInstanceGroupsOutput
  },
  errors: [
    {
      shape: InternalServerError
    }
  ]
};
