import { _ArnListType } from "./_ArnListType";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _RoleUsageType: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Region: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Resources: {
      shape: _ArnListType
    }
  }
};
