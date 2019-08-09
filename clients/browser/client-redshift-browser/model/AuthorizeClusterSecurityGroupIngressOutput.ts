import { _ClusterSecurityGroup } from "./_ClusterSecurityGroup";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const AuthorizeClusterSecurityGroupIngressOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ClusterSecurityGroup: {
      shape: _ClusterSecurityGroup
    }
  }
};
