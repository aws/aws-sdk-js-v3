import { _CheckpointConfiguration } from "./_CheckpointConfiguration";
import { _MonitoringConfiguration } from "./_MonitoringConfiguration";
import { _ParallelismConfiguration } from "./_ParallelismConfiguration";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _FlinkApplicationConfiguration: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    CheckpointConfiguration: {
      shape: _CheckpointConfiguration
    },
    MonitoringConfiguration: {
      shape: _MonitoringConfiguration
    },
    ParallelismConfiguration: {
      shape: _ParallelismConfiguration
    }
  }
};
