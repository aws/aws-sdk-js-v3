import { List as _List_ } from "@aws-sdk/types";
import { _ContentTypeProfile } from "./_ContentTypeProfile";

export const _ContentTypeProfileList: _List_ = {
  type: "list",
  member: {
    shape: _ContentTypeProfile,
    locationName: "ContentTypeProfile"
  }
};
