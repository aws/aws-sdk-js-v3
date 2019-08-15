import { CreateSnapshotScheduleInput } from "../shapes/CreateSnapshotScheduleInput";
import { CreateSnapshotScheduleOutput } from "../shapes/CreateSnapshotScheduleOutput";
import { SnapshotScheduleAlreadyExistsFault } from "../shapes/SnapshotScheduleAlreadyExistsFault";
import { InvalidScheduleFault } from "../shapes/InvalidScheduleFault";
import { SnapshotScheduleQuotaExceededFault } from "../shapes/SnapshotScheduleQuotaExceededFault";
import { TagLimitExceededFault } from "../shapes/TagLimitExceededFault";
import { ScheduleDefinitionTypeUnsupportedFault } from "../shapes/ScheduleDefinitionTypeUnsupportedFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
