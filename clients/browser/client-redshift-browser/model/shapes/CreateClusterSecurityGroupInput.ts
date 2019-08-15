import { _TagList } from "./_TagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateClusterSecurityGroupInput: _Structure_ = {
  type: "structure",
  required: ["ClusterSecurityGroupName", "Description"],
  members: {
    ClusterSecurityGroupName: {
      shape: {
        type: "string"
      }
    },
    Description: {
      shape: {
        type: "string"
      }
    },
    Tags: {
      shape: _TagList
    }
  }
};
