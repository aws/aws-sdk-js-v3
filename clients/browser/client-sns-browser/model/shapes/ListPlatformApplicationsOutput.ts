import { _ListOfPlatformApplications } from "./_ListOfPlatformApplications";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListPlatformApplicationsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    PlatformApplications: {
      shape: _ListOfPlatformApplications
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
