import { _IpRoutesInfo } from "./_IpRoutesInfo";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListIpRoutesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    IpRoutesInfo: {
      shape: _IpRoutesInfo
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
