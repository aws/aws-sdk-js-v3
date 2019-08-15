import { _ConfigurationItemList } from "./_ConfigurationItemList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetResourceConfigHistoryOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    configurationItems: {
      shape: _ConfigurationItemList
    },
    nextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
