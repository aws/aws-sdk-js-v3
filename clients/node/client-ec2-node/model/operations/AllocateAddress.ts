import { AllocateAddressInput } from "../shapes/AllocateAddressInput";
import { AllocateAddressOutput } from "../shapes/AllocateAddressOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const AllocateAddress: _Operation_ = {
  metadata: ServiceMetadata,
  name: "AllocateAddress",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: AllocateAddressInput
  },
  output: {
    shape: AllocateAddressOutput
  },
  errors: []
};
