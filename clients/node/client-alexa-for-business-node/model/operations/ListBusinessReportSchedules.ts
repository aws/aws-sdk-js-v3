import { ListBusinessReportSchedulesInput } from "../shapes/ListBusinessReportSchedulesInput";
import { ListBusinessReportSchedulesOutput } from "../shapes/ListBusinessReportSchedulesOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
