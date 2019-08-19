import { _SqlApplicationConfigurationDescription } from "./_SqlApplicationConfigurationDescription";
import { _ApplicationCodeConfigurationDescription } from "./_ApplicationCodeConfigurationDescription";
import { _RunConfigurationDescription } from "./_RunConfigurationDescription";
import { _FlinkApplicationConfigurationDescription } from "./_FlinkApplicationConfigurationDescription";
import { _EnvironmentPropertyDescriptions } from "./_EnvironmentPropertyDescriptions";
import { _ApplicationSnapshotConfigurationDescription } from "./_ApplicationSnapshotConfigurationDescription";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ApplicationConfigurationDescription: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    SqlApplicationConfigurationDescription: {
      shape: _SqlApplicationConfigurationDescription
    },
    ApplicationCodeConfigurationDescription: {
      shape: _ApplicationCodeConfigurationDescription
    },
    RunConfigurationDescription: {
      shape: _RunConfigurationDescription
    },
    FlinkApplicationConfigurationDescription: {
      shape: _FlinkApplicationConfigurationDescription
    },
    EnvironmentPropertyDescriptions: {
      shape: _EnvironmentPropertyDescriptions
    },
    ApplicationSnapshotConfigurationDescription: {
      shape: _ApplicationSnapshotConfigurationDescription
    }
  }
};
