import { _ListOfActivityResponse } from "./_ListOfActivityResponse";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ActivitiesResponse: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Item: {
      shape: _ListOfActivityResponse
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
