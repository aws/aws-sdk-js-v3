import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Location: _Structure_ = {
  type: "structure",
  required: ["latitude", "longitude"],
  members: {
    latitude: {
      shape: {
        type: "float"
      }
    },
    longitude: {
      shape: {
        type: "float"
      }
    }
  }
};
