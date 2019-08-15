import { ModifyInstancePlacementInput } from "../shapes/ModifyInstancePlacementInput";
import { ModifyInstancePlacementOutput } from "../shapes/ModifyInstancePlacementOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ModifyInstancePlacement: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ModifyInstancePlacement",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ModifyInstancePlacementInput
  },
  output: {
    shape: ModifyInstancePlacementOutput
  },
  errors: []
};
