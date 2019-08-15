import { List as _List_ } from "@aws-sdk/types";
import { _EcsCluster } from "./_EcsCluster";

export const _EcsClusters: _List_ = {
  type: "list",
  member: {
    shape: _EcsCluster
  }
};
