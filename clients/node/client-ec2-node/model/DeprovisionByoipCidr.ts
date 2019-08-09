import { DeprovisionByoipCidrInput } from "./DeprovisionByoipCidrInput";
import { DeprovisionByoipCidrOutput } from "./DeprovisionByoipCidrOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeprovisionByoipCidr: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeprovisionByoipCidr",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeprovisionByoipCidrInput
  },
  output: {
    shape: DeprovisionByoipCidrOutput
  },
  errors: []
};
