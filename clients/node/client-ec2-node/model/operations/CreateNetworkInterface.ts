import { CreateNetworkInterfaceInput } from "../shapes/CreateNetworkInterfaceInput";
import { CreateNetworkInterfaceOutput } from "../shapes/CreateNetworkInterfaceOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateNetworkInterface: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateNetworkInterface",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateNetworkInterfaceInput
  },
  output: {
    shape: CreateNetworkInterfaceOutput
  },
  errors: []
};
