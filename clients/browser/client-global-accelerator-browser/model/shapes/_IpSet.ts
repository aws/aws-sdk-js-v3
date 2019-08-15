import { _IpAddresses } from "./_IpAddresses";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _IpSet: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    IpFamily: {
      shape: {
        type: "string"
      }
    },
    IpAddresses: {
      shape: _IpAddresses
    }
  }
};
