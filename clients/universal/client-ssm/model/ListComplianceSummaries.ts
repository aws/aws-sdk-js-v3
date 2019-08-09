import { ListComplianceSummariesInput } from "./ListComplianceSummariesInput";
import { ListComplianceSummariesOutput } from "./ListComplianceSummariesOutput";
import { InvalidFilter } from "./InvalidFilter";
import { InvalidNextToken } from "./InvalidNextToken";
import { InternalServerError } from "./InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListComplianceSummaries: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListComplianceSummaries",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListComplianceSummariesInput
  },
  output: {
    shape: ListComplianceSummariesOutput
  },
  errors: [
    {
      shape: InvalidFilter
    },
    {
      shape: InvalidNextToken
    },
    {
      shape: InternalServerError
    }
  ]
};
