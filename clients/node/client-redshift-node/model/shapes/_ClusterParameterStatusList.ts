import { List as _List_ } from "@aws-sdk/types";
import { _ClusterParameterStatus } from "./_ClusterParameterStatus";

export const _ClusterParameterStatusList: _List_ = {
  type: "list",
  member: {
    shape: _ClusterParameterStatus
  }
};
