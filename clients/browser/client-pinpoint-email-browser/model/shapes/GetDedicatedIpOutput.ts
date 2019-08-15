import { _DedicatedIp } from "./_DedicatedIp";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetDedicatedIpOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    DedicatedIp: {
      shape: _DedicatedIp
    }
  }
};
