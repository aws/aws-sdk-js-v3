import { ___listOf__string } from "./___listOf__string";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ZookeeperNodeInfo: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AttachedENIId: {
      shape: {
        type: "string"
      },
      locationName: "attachedENIId"
    },
    ClientVpcIpAddress: {
      shape: {
        type: "string"
      },
      locationName: "clientVpcIpAddress"
    },
    Endpoints: {
      shape: ___listOf__string,
      locationName: "endpoints"
    },
    ZookeeperId: {
      shape: {
        type: "float"
      },
      locationName: "zookeeperId"
    },
    ZookeeperVersion: {
      shape: {
        type: "string"
      },
      locationName: "zookeeperVersion"
    }
  }
};
