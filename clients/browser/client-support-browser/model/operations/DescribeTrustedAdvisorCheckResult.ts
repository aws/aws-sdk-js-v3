import { DescribeTrustedAdvisorCheckResultInput } from "../shapes/DescribeTrustedAdvisorCheckResultInput";
import { DescribeTrustedAdvisorCheckResultOutput } from "../shapes/DescribeTrustedAdvisorCheckResultOutput";
import { InternalServerError } from "../shapes/InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeTrustedAdvisorCheckResult: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeTrustedAdvisorCheckResult",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeTrustedAdvisorCheckResultInput
  },
  output: {
    shape: DescribeTrustedAdvisorCheckResultOutput
  },
  errors: [
    {
      shape: InternalServerError
    }
  ]
};
