import { DescribeTrustedAdvisorCheckSummariesInput } from "../shapes/DescribeTrustedAdvisorCheckSummariesInput";
import { DescribeTrustedAdvisorCheckSummariesOutput } from "../shapes/DescribeTrustedAdvisorCheckSummariesOutput";
import { InternalServerError } from "../shapes/InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeTrustedAdvisorCheckSummaries: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeTrustedAdvisorCheckSummaries",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeTrustedAdvisorCheckSummariesInput
  },
  output: {
    shape: DescribeTrustedAdvisorCheckSummariesOutput
  },
  errors: [
    {
      shape: InternalServerError
    }
  ]
};
