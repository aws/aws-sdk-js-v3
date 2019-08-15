import { UpdateBusinessReportScheduleInput } from "../shapes/UpdateBusinessReportScheduleInput";
import { UpdateBusinessReportScheduleOutput } from "../shapes/UpdateBusinessReportScheduleOutput";
import { NotFoundException } from "../shapes/NotFoundException";
import { ConcurrentModificationException } from "../shapes/ConcurrentModificationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateBusinessReportSchedule: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateBusinessReportSchedule",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateBusinessReportScheduleInput
  },
  output: {
    shape: UpdateBusinessReportScheduleOutput
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
