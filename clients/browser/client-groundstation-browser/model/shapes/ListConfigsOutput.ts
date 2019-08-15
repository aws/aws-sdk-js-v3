import { _ConfigList } from "./_ConfigList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListConfigsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    configList: {
      shape: _ConfigList
    },
    nextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
