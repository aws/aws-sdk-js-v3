import { _ConfigurationInfo } from "./_ConfigurationInfo";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateClusterConfigurationInput: _Structure_ = {
  type: "structure",
  required: ["ClusterArn", "CurrentVersion", "ConfigurationInfo"],
  members: {
    ClusterArn: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "clusterArn"
    },
    ConfigurationInfo: {
      shape: _ConfigurationInfo,
      locationName: "configurationInfo"
    },
    CurrentVersion: {
      shape: {
        type: "string"
      },
      locationName: "currentVersion"
    }
  }
};
