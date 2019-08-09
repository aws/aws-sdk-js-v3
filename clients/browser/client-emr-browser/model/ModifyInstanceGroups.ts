import { ModifyInstanceGroupsInput } from "./ModifyInstanceGroupsInput";
import { ModifyInstanceGroupsOutput } from "./ModifyInstanceGroupsOutput";
import { InternalServerError } from "./InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ModifyInstanceGroups: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ModifyInstanceGroups",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ModifyInstanceGroupsInput
  },
  output: {
    shape: ModifyInstanceGroupsOutput
  },
  errors: [
    {
      shape: InternalServerError
    }
  ]
};
