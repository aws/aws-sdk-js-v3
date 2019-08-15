import { _BrokerNodeInfo } from "./_BrokerNodeInfo";
import { _ZookeeperNodeInfo } from "./_ZookeeperNodeInfo";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _NodeInfo: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AddedToClusterTime: {
      shape: {
        type: "string"
      },
      locationName: "addedToClusterTime"
    },
    BrokerNodeInfo: {
      shape: _BrokerNodeInfo,
      locationName: "brokerNodeInfo"
    },
    InstanceType: {
      shape: {
        type: "string"
      },
      locationName: "instanceType"
    },
    NodeARN: {
      shape: {
        type: "string"
      },
      locationName: "nodeARN"
    },
    NodeType: {
      shape: {
        type: "string"
      },
      locationName: "nodeType"
    },
    ZookeeperNodeInfo: {
      shape: _ZookeeperNodeInfo,
      locationName: "zookeeperNodeInfo"
    }
  }
};
