import { AllocateHostsInput } from "./AllocateHostsInput";
import { AllocateHostsOutput } from "./AllocateHostsOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const AllocateHosts: _Operation_ = {
  metadata: ServiceMetadata,
  name: "AllocateHosts",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: AllocateHostsInput
  },
  output: {
    shape: AllocateHostsOutput
  },
  errors: []
};
