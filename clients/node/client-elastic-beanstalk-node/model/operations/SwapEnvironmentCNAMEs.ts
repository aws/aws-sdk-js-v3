import { SwapEnvironmentCNAMEsInput } from "../shapes/SwapEnvironmentCNAMEsInput";
import { SwapEnvironmentCNAMEsOutput } from "../shapes/SwapEnvironmentCNAMEsOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const SwapEnvironmentCNAMEs: _Operation_ = {
  metadata: ServiceMetadata,
  name: "SwapEnvironmentCNAMEs",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: SwapEnvironmentCNAMEsInput
  },
  output: {
    shape: SwapEnvironmentCNAMEsOutput
  },
  errors: []
};
