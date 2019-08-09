import { _EC2ResourceUtilization } from "./_EC2ResourceUtilization";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ResourceUtilization: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    EC2ResourceUtilization: {
      shape: _EC2ResourceUtilization
    }
  }
};
