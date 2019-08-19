import { ___listOfBrokerEBSVolumeInfo } from "./___listOfBrokerEBSVolumeInfo";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateBrokerStorageInput: _Structure_ = {
  type: "structure",
  required: ["ClusterArn", "TargetBrokerEBSVolumeInfo", "CurrentVersion"],
  members: {
    ClusterArn: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "clusterArn"
    },
    CurrentVersion: {
      shape: {
        type: "string"
      },
      locationName: "currentVersion"
    },
    TargetBrokerEBSVolumeInfo: {
      shape: ___listOfBrokerEBSVolumeInfo,
      locationName: "targetBrokerEBSVolumeInfo"
    }
  }
};
