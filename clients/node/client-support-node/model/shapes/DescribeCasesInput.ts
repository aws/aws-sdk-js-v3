import { _CaseIdList } from "./_CaseIdList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeCasesInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    caseIdList: {
      shape: _CaseIdList
    },
    displayId: {
      shape: {
        type: "string"
      }
    },
    afterTime: {
      shape: {
        type: "string"
      }
    },
    beforeTime: {
      shape: {
        type: "string"
      }
    },
    includeResolvedCases: {
      shape: {
        type: "boolean"
      }
    },
    nextToken: {
      shape: {
        type: "string"
      }
    },
    maxResults: {
      shape: {
        type: "integer",
        min: 10
      }
    },
    language: {
      shape: {
        type: "string"
      }
    },
    includeCommunications: {
      shape: {
        type: "boolean"
      }
    }
  }
};
