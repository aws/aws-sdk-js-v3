import { ExpireSessionInput } from "../shapes/ExpireSessionInput";
import { ExpireSessionOutput } from "../shapes/ExpireSessionOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ExpireSession: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ExpireSession",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ExpireSessionInput
  },
  output: {
    shape: ExpireSessionOutput
  },
  errors: []
};
