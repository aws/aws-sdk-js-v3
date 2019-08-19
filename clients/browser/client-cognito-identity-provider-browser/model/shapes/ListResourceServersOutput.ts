import { _ResourceServersListType } from "./_ResourceServersListType";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListResourceServersOutput: _Structure_ = {
  type: "structure",
  required: ["ResourceServers"],
  members: {
    ResourceServers: {
      shape: _ResourceServersListType
    },
    NextToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
