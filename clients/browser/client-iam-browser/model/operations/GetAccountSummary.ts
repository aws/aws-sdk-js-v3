import { GetAccountSummaryInput } from "../shapes/GetAccountSummaryInput";
import { GetAccountSummaryOutput } from "../shapes/GetAccountSummaryOutput";
import { ServiceFailureException } from "../shapes/ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
