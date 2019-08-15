import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListSmartHomeAppliancesInput: _Structure_ = {
  type: "structure",
  required: ["RoomArn"],
  members: {
    RoomArn: {
      shape: {
        type: "string"
      }
    },
    MaxResults: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    NextToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
