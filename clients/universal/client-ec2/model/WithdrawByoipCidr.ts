import { WithdrawByoipCidrInput } from "./WithdrawByoipCidrInput";
import { WithdrawByoipCidrOutput } from "./WithdrawByoipCidrOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const WithdrawByoipCidr: _Operation_ = {
  metadata: ServiceMetadata,
  name: "WithdrawByoipCidr",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: WithdrawByoipCidrInput
  },
  output: {
    shape: WithdrawByoipCidrOutput
  },
  errors: []
};
