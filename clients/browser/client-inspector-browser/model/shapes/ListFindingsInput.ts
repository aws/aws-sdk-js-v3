import { _ListParentArnList } from "./_ListParentArnList";
import { _FindingFilter } from "./_FindingFilter";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListFindingsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    assessmentRunArns: {
      shape: _ListParentArnList
    },
    filter: {
      shape: _FindingFilter
    },
    nextToken: {
      shape: {
        type: "string",
        min: 1
      }
    },
    maxResults: {
      shape: {
        type: "integer"
      }
    }
  }
};
