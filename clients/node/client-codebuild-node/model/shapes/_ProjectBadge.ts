import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ProjectBadge: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    badgeEnabled: {
      shape: {
        type: "boolean"
      }
    },
    badgeRequestUrl: {
      shape: {
        type: "string"
      }
    }
  }
};
