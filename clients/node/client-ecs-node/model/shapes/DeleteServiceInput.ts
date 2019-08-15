import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteServiceInput: _Structure_ = {
  type: "structure",
  required: ["service"],
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
    force: {
      shape: {
        type: "boolean"
      }
    }
  }
};
