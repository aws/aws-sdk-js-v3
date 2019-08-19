import { DescribeTrustedAdvisorChecksInput } from "../shapes/DescribeTrustedAdvisorChecksInput";
import { DescribeTrustedAdvisorChecksOutput } from "../shapes/DescribeTrustedAdvisorChecksOutput";
import { InternalServerError } from "../shapes/InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeTrustedAdvisorChecks: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeTrustedAdvisorChecks",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeTrustedAdvisorChecksInput
  },
  output: {
    shape: DescribeTrustedAdvisorChecksOutput
  },
  errors: [
    {
      shape: InternalServerError
    }
  ]
};
