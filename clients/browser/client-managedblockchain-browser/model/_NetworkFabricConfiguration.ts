import { Structure as _Structure_ } from "@aws-sdk/types";

export const _NetworkFabricConfiguration: _Structure_ = {
  type: "structure",
  required: ["Edition"],
  members: {
    Edition: {
      shape: {
        type: "string"
      }
    }
  }
};
