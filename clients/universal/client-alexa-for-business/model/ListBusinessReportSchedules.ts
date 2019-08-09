import { ListBusinessReportSchedulesInput } from "./ListBusinessReportSchedulesInput";
import { ListBusinessReportSchedulesOutput } from "./ListBusinessReportSchedulesOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListBusinessReportSchedules: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListBusinessReportSchedules",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListBusinessReportSchedulesInput
  },
  output: {
    shape: ListBusinessReportSchedulesOutput
  },
  errors: []
};
