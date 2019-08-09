import { _CaseList } from "./_CaseList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeCasesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    cases: {
      shape: _CaseList
    },
    nextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
