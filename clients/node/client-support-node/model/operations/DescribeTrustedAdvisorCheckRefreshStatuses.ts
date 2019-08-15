import { DescribeTrustedAdvisorCheckRefreshStatusesInput } from "../shapes/DescribeTrustedAdvisorCheckRefreshStatusesInput";
import { DescribeTrustedAdvisorCheckRefreshStatusesOutput } from "../shapes/DescribeTrustedAdvisorCheckRefreshStatusesOutput";
import { InternalServerError } from "../shapes/InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeTrustedAdvisorCheckRefreshStatuses: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeTrustedAdvisorCheckRefreshStatuses",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeTrustedAdvisorCheckRefreshStatusesInput
  },
  output: {
    shape: DescribeTrustedAdvisorCheckRefreshStatusesOutput
  },
  errors: [
    {
      shape: InternalServerError
    }
  ]
};
