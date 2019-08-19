import { _InputList } from "./_InputList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetPersonalizedRankingInput: _Structure_ = {
  type: "structure",
  required: ["campaignArn", "inputList", "userId"],
  members: {
    campaignArn: {
      shape: {
        type: "string"
      }
    },
    inputList: {
      shape: _InputList
    },
    userId: {
      shape: {
        type: "string"
      }
    }
  }
};
