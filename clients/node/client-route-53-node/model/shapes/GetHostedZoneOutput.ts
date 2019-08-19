import { _HostedZone } from "./_HostedZone";
import { _DelegationSet } from "./_DelegationSet";
import { _VPCs } from "./_VPCs";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetHostedZoneOutput: _Structure_ = {
  type: "structure",
  required: ["HostedZone"],
  members: {
    HostedZone: {
      shape: _HostedZone
    },
    DelegationSet: {
      shape: _DelegationSet
    },
    VPCs: {
      shape: _VPCs
    }
  }
};
