import { CreateBusinessReportScheduleInput } from "./CreateBusinessReportScheduleInput";
import { CreateBusinessReportScheduleOutput } from "./CreateBusinessReportScheduleOutput";
import { AlreadyExistsException } from "./AlreadyExistsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateBusinessReportSchedule: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateBusinessReportSchedule",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateBusinessReportScheduleInput
  },
  output: {
    shape: CreateBusinessReportScheduleOutput
  },
  errors: [
    {
      shape: AlreadyExistsException
    }
  ]
};
