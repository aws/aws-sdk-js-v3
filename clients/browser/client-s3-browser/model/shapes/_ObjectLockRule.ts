import { _DefaultRetention } from "./_DefaultRetention";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ObjectLockRule: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    DefaultRetention: {
      shape: _DefaultRetention
    }
  }
};
