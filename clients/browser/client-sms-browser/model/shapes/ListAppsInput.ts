import { _AppIds } from "./_AppIds";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListAppsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    appIds: {
      shape: _AppIds
    },
    nextToken: {
      shape: {
        type: "string"
      }
    },
    maxResults: {
      shape: {
        type: "integer"
      }
    }
  }
};
