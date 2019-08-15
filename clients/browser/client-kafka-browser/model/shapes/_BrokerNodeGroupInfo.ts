import { ___listOf__string } from "./___listOf__string";
import { _StorageInfo } from "./_StorageInfo";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _BrokerNodeGroupInfo: _Structure_ = {
  type: "structure",
  required: ["ClientSubnets", "InstanceType"],
  members: {
    BrokerAZDistribution: {
      shape: {
        type: "string"
      },
      locationName: "brokerAZDistribution"
    },
    ClientSubnets: {
      shape: ___listOf__string,
      locationName: "clientSubnets"
    },
    InstanceType: {
      shape: {
        type: "string",
        min: 5
      },
      locationName: "instanceType"
    },
    SecurityGroups: {
      shape: ___listOf__string,
      locationName: "securityGroups"
    },
    StorageInfo: {
      shape: _StorageInfo,
      locationName: "storageInfo"
    }
  }
};
