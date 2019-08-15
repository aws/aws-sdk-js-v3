import { _ApplicationsList } from "./_ApplicationsList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListApplicationsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    applications: {
      shape: _ApplicationsList
    },
    nextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
