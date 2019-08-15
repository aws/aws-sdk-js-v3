import { ___listOfBrokerEBSVolumeInfo } from "./___listOfBrokerEBSVolumeInfo";
import { _ConfigurationInfo } from "./_ConfigurationInfo";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _MutableClusterInfo: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    BrokerEBSVolumeInfo: {
      shape: ___listOfBrokerEBSVolumeInfo,
      locationName: "brokerEBSVolumeInfo"
    },
    ConfigurationInfo: {
      shape: _ConfigurationInfo,
      locationName: "configurationInfo"
    },
    NumberOfBrokerNodes: {
      shape: {
        type: "integer"
      },
      locationName: "numberOfBrokerNodes"
    }
  }
};
