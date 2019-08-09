import { _Settings } from "./_Settings";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListAccountSettingsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    settings: {
      shape: _Settings
    },
    nextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
