import { ReleaseHostsInput } from "../shapes/ReleaseHostsInput";
import { ReleaseHostsOutput } from "../shapes/ReleaseHostsOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ReleaseHosts: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ReleaseHosts",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ReleaseHostsInput
  },
  output: {
    shape: ReleaseHostsOutput
  },
  errors: []
};
