import { CreateSnapshotScheduleInput } from "./CreateSnapshotScheduleInput";
import { CreateSnapshotScheduleOutput } from "./CreateSnapshotScheduleOutput";
import { SnapshotScheduleAlreadyExistsFault } from "./SnapshotScheduleAlreadyExistsFault";
import { InvalidScheduleFault } from "./InvalidScheduleFault";
import { SnapshotScheduleQuotaExceededFault } from "./SnapshotScheduleQuotaExceededFault";
import { TagLimitExceededFault } from "./TagLimitExceededFault";
import { ScheduleDefinitionTypeUnsupportedFault } from "./ScheduleDefinitionTypeUnsupportedFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateSnapshotSchedule: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateSnapshotSchedule",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateSnapshotScheduleInput
  },
  output: {
    shape: CreateSnapshotScheduleOutput,
    resultWrapper: "CreateSnapshotScheduleResult"
  },
  errors: [
    {
      shape: SnapshotScheduleAlreadyExistsFault
    },
    {
      shape: InvalidScheduleFault
    },
    {
      shape: SnapshotScheduleQuotaExceededFault
    },
    {
      shape: TagLimitExceededFault
    },
    {
      shape: ScheduleDefinitionTypeUnsupportedFault
    }
  ]
};
