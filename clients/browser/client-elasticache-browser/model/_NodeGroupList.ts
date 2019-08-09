import { List as _List_ } from "@aws-sdk/types";
import { _NodeGroup } from "./_NodeGroup";

export const _NodeGroupList: _List_ = {
  type: "list",
  member: {
    shape: _NodeGroup,
    locationName: "NodeGroup"
  }
};
