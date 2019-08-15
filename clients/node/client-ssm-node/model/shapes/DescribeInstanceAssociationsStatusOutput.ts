import { _InstanceAssociationStatusInfos } from "./_InstanceAssociationStatusInfos";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeInstanceAssociationsStatusOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    InstanceAssociationStatusInfos: {
      shape: _InstanceAssociationStatusInfos
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
