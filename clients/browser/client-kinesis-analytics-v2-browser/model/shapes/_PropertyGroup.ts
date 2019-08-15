import { _PropertyMap } from "./_PropertyMap";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _PropertyGroup: _Structure_ = {
  type: "structure",
  required: ["PropertyGroupId", "PropertyMap"],
  members: {
    PropertyGroupId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    PropertyMap: {
      shape: _PropertyMap
    }
  }
};
