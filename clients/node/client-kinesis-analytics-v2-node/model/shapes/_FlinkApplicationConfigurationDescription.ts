import { _CheckpointConfigurationDescription } from "./_CheckpointConfigurationDescription";
import { _MonitoringConfigurationDescription } from "./_MonitoringConfigurationDescription";
import { _ParallelismConfigurationDescription } from "./_ParallelismConfigurationDescription";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _FlinkApplicationConfigurationDescription: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    CheckpointConfigurationDescription: {
      shape: _CheckpointConfigurationDescription
    },
    MonitoringConfigurationDescription: {
      shape: _MonitoringConfigurationDescription
    },
    ParallelismConfigurationDescription: {
      shape: _ParallelismConfigurationDescription
    },
    JobPlanDescription: {
      shape: {
        type: "string"
      }
    }
  }
};
