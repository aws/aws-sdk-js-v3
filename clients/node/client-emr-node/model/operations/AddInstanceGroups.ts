import { AddInstanceGroupsInput } from "../shapes/AddInstanceGroupsInput";
import { AddInstanceGroupsOutput } from "../shapes/AddInstanceGroupsOutput";
import { InternalServerError } from "../shapes/InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
