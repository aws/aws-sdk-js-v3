import { _HapgList } from "./_HapgList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListHapgsOutput: _Structure_ = {
  type: "structure",
  required: ["HapgList"],
  members: {
    HapgList: {
      shape: _HapgList
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
