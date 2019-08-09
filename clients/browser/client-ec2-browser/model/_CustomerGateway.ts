import { _TagList } from "./_TagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _CustomerGateway: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    BgpAsn: {
      shape: {
        type: "string"
      },
      locationName: "bgpAsn"
    },
    CustomerGatewayId: {
      shape: {
        type: "string"
      },
      locationName: "customerGatewayId"
    },
    IpAddress: {
      shape: {
        type: "string"
      },
      locationName: "ipAddress"
    },
    State: {
      shape: {
        type: "string"
      },
      locationName: "state"
    },
    Type: {
      shape: {
        type: "string"
      },
      locationName: "type"
    },
    Tags: {
      shape: _TagList,
      locationName: "tagSet"
    }
  }
};
