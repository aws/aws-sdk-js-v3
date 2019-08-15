import { _SigningPlatforms } from "./_SigningPlatforms";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListSigningPlatformsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    platforms: {
      shape: _SigningPlatforms
    },
    nextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
