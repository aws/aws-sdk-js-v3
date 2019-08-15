import { _TransitGatewayOptions } from "./_TransitGatewayOptions";
import { _TagList } from "./_TagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _TransitGateway: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    TransitGatewayId: {
      shape: {
        type: "string"
      },
      locationName: "transitGatewayId"
    },
    TransitGatewayArn: {
      shape: {
        type: "string"
      },
      locationName: "transitGatewayArn"
    },
    State: {
      shape: {
        type: "string"
      },
      locationName: "state"
    },
    OwnerId: {
      shape: {
        type: "string"
      },
      locationName: "ownerId"
    },
    Description: {
      shape: {
        type: "string"
      },
      locationName: "description"
    },
    CreationTime: {
      shape: {
        type: "timestamp"
      },
      locationName: "creationTime"
    },
    Options: {
      shape: _TransitGatewayOptions,
      locationName: "options"
    },
    Tags: {
      shape: _TagList,
      locationName: "tagSet"
    }
  }
};
