import { RefreshTrustedAdvisorCheckInput } from "../shapes/RefreshTrustedAdvisorCheckInput";
import { RefreshTrustedAdvisorCheckOutput } from "../shapes/RefreshTrustedAdvisorCheckOutput";
import { InternalServerError } from "../shapes/InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const RefreshTrustedAdvisorCheck: _Operation_ = {
  metadata: ServiceMetadata,
  name: "RefreshTrustedAdvisorCheck",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: RefreshTrustedAdvisorCheckInput
  },
  output: {
    shape: RefreshTrustedAdvisorCheckOutput
  },
  errors: [
    {
      shape: InternalServerError
    }
  ]
};
