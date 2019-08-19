import { List as _List_ } from "@aws-sdk/types";
import { _DiscoveredResource } from "./_DiscoveredResource";

export const _DiscoveredResourceList: _List_ = {
  type: "list",
  member: {
    shape: _DiscoveredResource
  }
};
