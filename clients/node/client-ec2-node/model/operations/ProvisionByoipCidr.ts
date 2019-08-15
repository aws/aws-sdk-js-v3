import { ProvisionByoipCidrInput } from "../shapes/ProvisionByoipCidrInput";
import { ProvisionByoipCidrOutput } from "../shapes/ProvisionByoipCidrOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ProvisionByoipCidr: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ProvisionByoipCidr",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ProvisionByoipCidrInput
  },
  output: {
    shape: ProvisionByoipCidrOutput
  },
  errors: []
};
