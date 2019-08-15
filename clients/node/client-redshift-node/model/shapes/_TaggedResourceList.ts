import { List as _List_ } from "@aws-sdk/types";
import { _TaggedResource } from "./_TaggedResource";

export const _TaggedResourceList: _List_ = {
  type: "list",
  member: {
    shape: _TaggedResource,
    locationName: "TaggedResource"
  }
};
