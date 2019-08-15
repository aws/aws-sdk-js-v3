import { _SqlApplicationConfigurationUpdate } from "./_SqlApplicationConfigurationUpdate";
import { _ApplicationCodeConfigurationUpdate } from "./_ApplicationCodeConfigurationUpdate";
import { _FlinkApplicationConfigurationUpdate } from "./_FlinkApplicationConfigurationUpdate";
import { _EnvironmentPropertyUpdates } from "./_EnvironmentPropertyUpdates";
import { _ApplicationSnapshotConfigurationUpdate } from "./_ApplicationSnapshotConfigurationUpdate";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ApplicationConfigurationUpdate: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    SqlApplicationConfigurationUpdate: {
      shape: _SqlApplicationConfigurationUpdate
    },
    ApplicationCodeConfigurationUpdate: {
      shape: _ApplicationCodeConfigurationUpdate
    },
    FlinkApplicationConfigurationUpdate: {
      shape: _FlinkApplicationConfigurationUpdate
    },
    EnvironmentPropertyUpdates: {
      shape: _EnvironmentPropertyUpdates
    },
    ApplicationSnapshotConfigurationUpdate: {
      shape: _ApplicationSnapshotConfigurationUpdate
    }
  }
};
