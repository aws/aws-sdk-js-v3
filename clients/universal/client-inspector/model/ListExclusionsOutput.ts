import { _ListReturnedArnList } from "./_ListReturnedArnList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListExclusionsOutput: _Structure_ = {
  type: "structure",
  required: ["exclusionArns"],
  members: {
    exclusionArns: {
      shape: _ListReturnedArnList
    },
    nextToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
