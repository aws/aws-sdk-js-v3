import { _Apps } from "./_Apps";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListAppsOutput: _Structure_ = {
  type: "structure",
  required: ["apps"],
  members: {
    apps: {
      shape: _Apps
    },
    nextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
