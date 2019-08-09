import { DeleteBusinessReportScheduleInput } from "./DeleteBusinessReportScheduleInput";
import { DeleteBusinessReportScheduleOutput } from "./DeleteBusinessReportScheduleOutput";
import { NotFoundException } from "./NotFoundException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteBusinessReportSchedule: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteBusinessReportSchedule",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteBusinessReportScheduleInput
  },
  output: {
    shape: DeleteBusinessReportScheduleOutput
  },
  errors: [
    {
      shape: NotFoundException
    },
    {
      shape: ConcurrentModificationException
    }
  ]
};
