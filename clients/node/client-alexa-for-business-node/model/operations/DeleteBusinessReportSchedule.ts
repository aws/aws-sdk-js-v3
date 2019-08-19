import { DeleteBusinessReportScheduleInput } from "../shapes/DeleteBusinessReportScheduleInput";
import { DeleteBusinessReportScheduleOutput } from "../shapes/DeleteBusinessReportScheduleOutput";
import { NotFoundException } from "../shapes/NotFoundException";
import { ConcurrentModificationException } from "../shapes/ConcurrentModificationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
