import { ReleaseAddressInput } from "../shapes/ReleaseAddressInput";
import { ReleaseAddressOutput } from "../shapes/ReleaseAddressOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ReleaseAddress: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ReleaseAddress",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ReleaseAddressInput
  },
  output: {
    shape: ReleaseAddressOutput
  },
  errors: []
};
