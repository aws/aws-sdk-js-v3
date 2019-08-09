import { _GroupIds } from "./_GroupIds";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeSecurityGroupReferencesInput: _Structure_ = {
  type: "structure",
  required: ["GroupId"],
  members: {
    DryRun: {
      shape: {
        type: "boolean"
      }
    },
    GroupId: {
      shape: _GroupIds
    }
  }
};
