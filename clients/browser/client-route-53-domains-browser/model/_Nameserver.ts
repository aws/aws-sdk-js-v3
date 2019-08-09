import { _GlueIpList } from "./_GlueIpList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Nameserver: _Structure_ = {
  type: "structure",
  required: ["Name"],
  members: {
    Name: {
      shape: {
        type: "string"
      }
    },
    GlueIps: {
      shape: _GlueIpList
    }
  }
};
