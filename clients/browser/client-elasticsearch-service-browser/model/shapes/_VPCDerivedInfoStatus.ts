import { _VPCDerivedInfo } from "./_VPCDerivedInfo";
import { _OptionStatus } from "./_OptionStatus";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _VPCDerivedInfoStatus: _Structure_ = {
  type: "structure",
  required: ["Options", "Status"],
  members: {
    Options: {
      shape: _VPCDerivedInfo
    },
    Status: {
      shape: _OptionStatus
    }
  }
};
