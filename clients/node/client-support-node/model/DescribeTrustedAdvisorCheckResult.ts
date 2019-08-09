import { DescribeTrustedAdvisorCheckResultInput } from "./DescribeTrustedAdvisorCheckResultInput";
import { DescribeTrustedAdvisorCheckResultOutput } from "./DescribeTrustedAdvisorCheckResultOutput";
import { InternalServerError } from "./InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
