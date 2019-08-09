import { _SqlApplicationConfiguration } from "./_SqlApplicationConfiguration";
import { _FlinkApplicationConfiguration } from "./_FlinkApplicationConfiguration";
import { _EnvironmentProperties } from "./_EnvironmentProperties";
import { _ApplicationCodeConfiguration } from "./_ApplicationCodeConfiguration";
import { _ApplicationSnapshotConfiguration } from "./_ApplicationSnapshotConfiguration";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ApplicationConfiguration: _Structure_ = {
  type: "structure",
  required: ["ApplicationCodeConfiguration"],
  members: {
    SqlApplicationConfiguration: {
      shape: _SqlApplicationConfiguration
    },
    FlinkApplicationConfiguration: {
      shape: _FlinkApplicationConfiguration
    },
    EnvironmentProperties: {
      shape: _EnvironmentProperties
    },
    ApplicationCodeConfiguration: {
      shape: _ApplicationCodeConfiguration
    },
    ApplicationSnapshotConfiguration: {
      shape: _ApplicationSnapshotConfiguration
    }
  }
};
