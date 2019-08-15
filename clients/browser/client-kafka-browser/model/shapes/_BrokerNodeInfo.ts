import { _BrokerSoftwareInfo } from "./_BrokerSoftwareInfo";
import { ___listOf__string } from "./___listOf__string";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _BrokerNodeInfo: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AttachedENIId: {
      shape: {
        type: "string"
      },
      locationName: "attachedENIId"
    },
    BrokerId: {
      shape: {
        type: "float"
      },
      locationName: "brokerId"
    },
    ClientSubnet: {
      shape: {
        type: "string"
      },
      locationName: "clientSubnet"
    },
    ClientVpcIpAddress: {
      shape: {
        type: "string"
      },
      locationName: "clientVpcIpAddress"
    },
    CurrentBrokerSoftwareInfo: {
      shape: _BrokerSoftwareInfo,
      locationName: "currentBrokerSoftwareInfo"
    },
    Endpoints: {
      shape: ___listOf__string,
      locationName: "endpoints"
    }
  }
};
