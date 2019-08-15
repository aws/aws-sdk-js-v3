import { RemovePermissionInput } from "../shapes/RemovePermissionInput";
import { RemovePermissionOutput } from "../shapes/RemovePermissionOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const RemovePermission: _Operation_ = {
  metadata: ServiceMetadata,
  name: "RemovePermission",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: RemovePermissionInput
  },
  output: {
    shape: RemovePermissionOutput
  },
  errors: []
};
