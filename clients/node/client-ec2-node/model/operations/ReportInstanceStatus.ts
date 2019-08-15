import { ReportInstanceStatusInput } from "../shapes/ReportInstanceStatusInput";
import { ReportInstanceStatusOutput } from "../shapes/ReportInstanceStatusOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ReportInstanceStatus: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ReportInstanceStatus",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ReportInstanceStatusInput
  },
  output: {
    shape: ReportInstanceStatusOutput
  },
  errors: []
};
