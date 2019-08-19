import { _ReviewPolicyLevelList } from "./_ReviewPolicyLevelList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListReviewPolicyResultsForHITInput: _Structure_ = {
  type: "structure",
  required: ["HITId"],
  members: {
    HITId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    PolicyLevels: {
      shape: _ReviewPolicyLevelList
    },
    RetrieveActions: {
      shape: {
        type: "boolean"
      }
    },
    RetrieveResults: {
      shape: {
        type: "boolean"
      }
    },
    NextToken: {
      shape: {
        type: "string",
        min: 1
      }
    },
    MaxResults: {
      shape: {
        type: "integer",
        min: 1
      }
    }
  }
};
