import { AddPermissionInput } from "../shapes/AddPermissionInput";
import { AddPermissionOutput } from "../shapes/AddPermissionOutput";
import { OverLimit } from "../shapes/OverLimit";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const AddPermission: _Operation_ = {
  metadata: ServiceMetadata,
  name: "AddPermission",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: AddPermissionInput
  },
  output: {
    shape: AddPermissionOutput
  },
  errors: [
    {
      shape: OverLimit
    }
  ]
};
