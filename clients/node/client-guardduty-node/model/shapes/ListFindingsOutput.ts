import { _FindingIds } from "./_FindingIds";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListFindingsOutput: _Structure_ = {
  type: "structure",
  required: ["FindingIds"],
  members: {
    FindingIds: {
      shape: _FindingIds,
      locationName: "findingIds"
    },
    NextToken: {
      shape: {
        type: "string"
      },
      locationName: "nextToken"
    }
  }
};
