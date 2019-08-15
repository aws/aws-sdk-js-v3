import { _ListReturnedArnList } from "./_ListReturnedArnList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListFindingsOutput: _Structure_ = {
  type: "structure",
  required: ["findingArns"],
  members: {
    findingArns: {
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
