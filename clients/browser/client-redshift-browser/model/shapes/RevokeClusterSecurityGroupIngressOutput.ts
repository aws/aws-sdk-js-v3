import { _ClusterSecurityGroup } from "./_ClusterSecurityGroup";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const RevokeClusterSecurityGroupIngressOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ClusterSecurityGroup: {
      shape: _ClusterSecurityGroup
    }
  }
};
