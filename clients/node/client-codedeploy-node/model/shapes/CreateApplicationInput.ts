import { _TagList } from "./_TagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateApplicationInput: _Structure_ = {
  type: "structure",
  required: ["applicationName"],
  members: {
    applicationName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    computePlatform: {
      shape: {
        type: "string"
      }
    },
    tags: {
      shape: _TagList
    }
  }
};
