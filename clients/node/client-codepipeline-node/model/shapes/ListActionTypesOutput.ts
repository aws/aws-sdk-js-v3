import { _ActionTypeList } from "./_ActionTypeList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListActionTypesOutput: _Structure_ = {
  type: "structure",
  required: ["actionTypes"],
  members: {
    actionTypes: {
      shape: _ActionTypeList
    },
    nextToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
