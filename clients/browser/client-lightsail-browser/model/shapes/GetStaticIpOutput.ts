import { _StaticIp } from "./_StaticIp";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetStaticIpOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    staticIp: {
      shape: _StaticIp
    }
  }
};
