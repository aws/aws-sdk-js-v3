import { BundleInstanceInput } from "../shapes/BundleInstanceInput";
import { BundleInstanceOutput } from "../shapes/BundleInstanceOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const BundleInstance: _Operation_ = {
  metadata: ServiceMetadata,
  name: "BundleInstance",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: BundleInstanceInput
  },
  output: {
    shape: BundleInstanceOutput
  },
  errors: []
};
