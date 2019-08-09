import { _DedicatedIpList } from "./_DedicatedIpList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetDedicatedIpsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    DedicatedIps: {
      shape: _DedicatedIpList
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
