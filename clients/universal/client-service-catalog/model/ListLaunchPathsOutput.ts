import { _LaunchPathSummaries } from "./_LaunchPathSummaries";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListLaunchPathsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    LaunchPathSummaries: {
      shape: _LaunchPathSummaries
    },
    NextPageToken: {
      shape: {
        type: "string"
      }
    }
  }
};
