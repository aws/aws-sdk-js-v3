import { _EnvironmentPlatforms } from "./_EnvironmentPlatforms";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListCuratedEnvironmentImagesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    platforms: {
      shape: _EnvironmentPlatforms
    }
  }
};
