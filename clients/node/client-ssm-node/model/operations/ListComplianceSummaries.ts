import { ListComplianceSummariesInput } from "../shapes/ListComplianceSummariesInput";
import { ListComplianceSummariesOutput } from "../shapes/ListComplianceSummariesOutput";
import { InvalidFilter } from "../shapes/InvalidFilter";
import { InvalidNextToken } from "../shapes/InvalidNextToken";
import { InternalServerError } from "../shapes/InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
