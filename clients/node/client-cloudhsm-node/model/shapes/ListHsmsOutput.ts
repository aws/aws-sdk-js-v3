import { _HsmList } from "./_HsmList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListHsmsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    HsmList: {
      shape: _HsmList
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
