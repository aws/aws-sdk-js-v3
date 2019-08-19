import { ModifyInstanceGroupsInput } from "../shapes/ModifyInstanceGroupsInput";
import { ModifyInstanceGroupsOutput } from "../shapes/ModifyInstanceGroupsOutput";
import { InternalServerError } from "../shapes/InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
