import { _Expression } from "./_Expression";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetRightsizingRecommendationInput: _Structure_ = {
  type: "structure",
  required: ["Service"],
  members: {
    Filter: {
      shape: _Expression
    },
    Service: {
      shape: {
        type: "string"
      }
    },
    PageSize: {
      shape: {
        type: "integer"
      }
    },
    NextPageToken: {
      shape: {
        type: "string"
      }
    }
  }
};
