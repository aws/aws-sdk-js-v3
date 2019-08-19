import { CreateNetworkInterfacePermissionInput } from "../shapes/CreateNetworkInterfacePermissionInput";
import { CreateNetworkInterfacePermissionOutput } from "../shapes/CreateNetworkInterfacePermissionOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateNetworkInterfacePermission: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateNetworkInterfacePermission",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateNetworkInterfacePermissionInput
  },
  output: {
    shape: CreateNetworkInterfacePermissionOutput
  },
  errors: []
};
