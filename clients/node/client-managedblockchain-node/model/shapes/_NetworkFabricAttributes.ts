import { Structure as _Structure_ } from "@aws-sdk/types";

export const _NetworkFabricAttributes: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    OrderingServiceEndpoint: {
      shape: {
        type: "string"
      }
    },
    Edition: {
      shape: {
        type: "string"
      }
    }
  }
};
