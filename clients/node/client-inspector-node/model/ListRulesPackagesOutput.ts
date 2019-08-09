import { _ListReturnedArnList } from "./_ListReturnedArnList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListRulesPackagesOutput: _Structure_ = {
  type: "structure",
  required: ["rulesPackageArns"],
  members: {
    rulesPackageArns: {
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
