import { _ServiceCodeList } from "./_ServiceCodeList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeServicesInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    serviceCodeList: {
      shape: _ServiceCodeList
    },
    language: {
      shape: {
        type: "string"
      }
    }
  }
};
