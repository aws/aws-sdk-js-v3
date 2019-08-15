import { _ListedServers } from "./_ListedServers";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListServersOutput: _Structure_ = {
  type: "structure",
  required: ["Servers"],
  members: {
    NextToken: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Servers: {
      shape: _ListedServers
    }
  }
};
