import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DiscoveredResource: _Structure_ = {
  type: "structure",
  required: ["ConfigurationId"],
  members: {
    ConfigurationId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Description: {
      shape: {
        type: "string"
      }
    }
  }
};
