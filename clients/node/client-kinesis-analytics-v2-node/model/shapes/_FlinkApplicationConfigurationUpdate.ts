import { _CheckpointConfigurationUpdate } from "./_CheckpointConfigurationUpdate";
import { _MonitoringConfigurationUpdate } from "./_MonitoringConfigurationUpdate";
import { _ParallelismConfigurationUpdate } from "./_ParallelismConfigurationUpdate";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _FlinkApplicationConfigurationUpdate: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    CheckpointConfigurationUpdate: {
      shape: _CheckpointConfigurationUpdate
    },
    MonitoringConfigurationUpdate: {
      shape: _MonitoringConfigurationUpdate
    },
    ParallelismConfigurationUpdate: {
      shape: _ParallelismConfigurationUpdate
    }
  }
};
