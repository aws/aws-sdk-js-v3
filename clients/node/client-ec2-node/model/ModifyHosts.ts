import { ModifyHostsInput } from "./ModifyHostsInput";
import { ModifyHostsOutput } from "./ModifyHostsOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ModifyHosts: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ModifyHosts",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ModifyHostsInput
  },
  output: {
    shape: ModifyHostsOutput
  },
  errors: []
};
