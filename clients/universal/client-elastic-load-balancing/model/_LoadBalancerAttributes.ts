import { _CrossZoneLoadBalancing } from "./_CrossZoneLoadBalancing";
import { _AccessLog } from "./_AccessLog";
import { _ConnectionDraining } from "./_ConnectionDraining";
import { _ConnectionSettings } from "./_ConnectionSettings";
import { _AdditionalAttributes } from "./_AdditionalAttributes";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _LoadBalancerAttributes: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    CrossZoneLoadBalancing: {
      shape: _CrossZoneLoadBalancing
    },
    AccessLog: {
      shape: _AccessLog
    },
    ConnectionDraining: {
      shape: _ConnectionDraining
    },
    ConnectionSettings: {
      shape: _ConnectionSettings
    },
    AdditionalAttributes: {
      shape: _AdditionalAttributes
    }
  }
};
