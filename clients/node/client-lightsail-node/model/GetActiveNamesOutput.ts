import { _StringList } from "./_StringList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetActiveNamesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    activeNames: {
      shape: _StringList
    },
    nextPageToken: {
      shape: {
        type: "string"
      }
    }
  }
};
