import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ResourceLocation: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    availabilityZone: {
      shape: {
        type: "string"
      }
    },
    regionName: {
      shape: {
        type: "string"
      }
    }
  }
};
