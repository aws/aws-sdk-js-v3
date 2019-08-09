import { _TagList } from "./_TagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateInterconnectInput: _Structure_ = {
  type: "structure",
  required: ["interconnectName", "bandwidth", "location"],
  members: {
    interconnectName: {
      shape: {
        type: "string"
      }
    },
    bandwidth: {
      shape: {
        type: "string"
      }
    },
    location: {
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
