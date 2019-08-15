import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteWorkteamOutput: _Structure_ = {
  type: "structure",
  required: ["Success"],
  members: {
    Success: {
      shape: {
        type: "boolean"
      }
    }
  }
};
