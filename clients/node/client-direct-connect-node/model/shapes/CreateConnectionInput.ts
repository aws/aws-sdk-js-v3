import { _TagList } from "./_TagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateConnectionInput: _Structure_ = {
  type: "structure",
  required: ["location", "bandwidth", "connectionName"],
  members: {
    location: {
      shape: {
        type: "string"
      }
    },
    bandwidth: {
      shape: {
        type: "string"
      }
    },
    connectionName: {
      shape: {
        type: "string"
      }
    },
    lagId: {
      shape: {
        type: "string"
      }
    },
    tags: {
      shape: _TagList
    }
  }
};
