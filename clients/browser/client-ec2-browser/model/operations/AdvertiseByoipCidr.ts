import { AdvertiseByoipCidrInput } from "../shapes/AdvertiseByoipCidrInput";
import { AdvertiseByoipCidrOutput } from "../shapes/AdvertiseByoipCidrOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const AdvertiseByoipCidr: _Operation_ = {
  metadata: ServiceMetadata,
  name: "AdvertiseByoipCidr",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: AdvertiseByoipCidrInput
  },
  output: {
    shape: AdvertiseByoipCidrOutput
  },
  errors: []
};
