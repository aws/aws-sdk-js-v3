import { GetTemplateSummaryInput } from "./GetTemplateSummaryInput";
import { GetTemplateSummaryOutput } from "./GetTemplateSummaryOutput";
import { StackSetNotFoundException } from "./StackSetNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetTemplateSummary: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetTemplateSummary",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetTemplateSummaryInput
  },
  output: {
    shape: GetTemplateSummaryOutput,
    resultWrapper: "GetTemplateSummaryResult"
  },
  errors: [
    {
      shape: StackSetNotFoundException
    }
  ]
};
