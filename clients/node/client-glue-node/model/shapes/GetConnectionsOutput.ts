import { _ConnectionList } from "./_ConnectionList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetConnectionsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ConnectionList: {
      shape: _ConnectionList
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
