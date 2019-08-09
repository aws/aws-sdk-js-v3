import { _ServerList } from "./_ServerList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetServersOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    lastModifiedOn: {
      shape: {
        type: "timestamp"
      }
    },
    serverCatalogStatus: {
      shape: {
        type: "string"
      }
    },
    serverList: {
      shape: _ServerList
    },
    nextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
