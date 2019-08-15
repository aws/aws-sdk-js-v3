import { Structure as _Structure_ } from "@aws-sdk/types";

export const _WriteEventStream: _Structure_ = {
  type: "structure",
  required: ["RoleArn", "DestinationStreamArn"],
  members: {
    DestinationStreamArn: {
      shape: {
        type: "string"
      }
    },
    RoleArn: {
      shape: {
        type: "string"
      }
    }
  }
};
