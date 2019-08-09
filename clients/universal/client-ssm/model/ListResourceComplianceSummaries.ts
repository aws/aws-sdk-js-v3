import { ListResourceComplianceSummariesInput } from "./ListResourceComplianceSummariesInput";
import { ListResourceComplianceSummariesOutput } from "./ListResourceComplianceSummariesOutput";
import { InvalidFilter } from "./InvalidFilter";
import { InvalidNextToken } from "./InvalidNextToken";
import { InternalServerError } from "./InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
