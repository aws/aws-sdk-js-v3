import { _ResourceShareList } from "./_ResourceShareList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetResourceSharesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    resourceShares: {
      shape: _ResourceShareList
    },
    nextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
