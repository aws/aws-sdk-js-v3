import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateServicePrimaryTaskSetInput: _Structure_ = {
  type: "structure",
  required: ["cluster", "service", "primaryTaskSet"],
  members: {
    cluster: {
      shape: {
        type: "string"
      }
    },
    service: {
      shape: {
        type: "string"
      }
    },
    primaryTaskSet: {
      shape: {
        type: "string"
      }
    }
  }
};
