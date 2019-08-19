import { ListResourceComplianceSummariesInput } from "../shapes/ListResourceComplianceSummariesInput";
import { ListResourceComplianceSummariesOutput } from "../shapes/ListResourceComplianceSummariesOutput";
import { InvalidFilter } from "../shapes/InvalidFilter";
import { InvalidNextToken } from "../shapes/InvalidNextToken";
import { InternalServerError } from "../shapes/InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListResourceComplianceSummaries: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListResourceComplianceSummaries",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListResourceComplianceSummariesInput
  },
  output: {
    shape: ListResourceComplianceSummariesOutput
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
