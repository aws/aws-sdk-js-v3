import { _EC2TagSetList } from "./_EC2TagSetList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _EC2TagSet: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ec2TagSetList: {
      shape: _EC2TagSetList
    }
  }
};
