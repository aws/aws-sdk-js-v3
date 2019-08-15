import { _StaticIpList } from "./_StaticIpList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetStaticIpsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    staticIps: {
      shape: _StaticIpList
    },
    nextPageToken: {
      shape: {
        type: "string"
      }
    }
  }
};
