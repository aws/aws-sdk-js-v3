import { GetAccountSummaryInput } from "./GetAccountSummaryInput";
import { GetAccountSummaryOutput } from "./GetAccountSummaryOutput";
import { ServiceFailureException } from "./ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetAccountSummary: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetAccountSummary",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetAccountSummaryInput
  },
  output: {
    shape: GetAccountSummaryOutput,
    resultWrapper: "GetAccountSummaryResult"
  },
  errors: [
    {
      shape: ServiceFailureException
    }
  ]
};
