import { _DnsConfigChange } from "./_DnsConfigChange";
import { _HealthCheckConfig } from "./_HealthCheckConfig";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ServiceChange: _Structure_ = {
  type: "structure",
  required: ["DnsConfig"],
  members: {
    Description: {
      shape: {
        type: "string"
      }
    },
    DnsConfig: {
      shape: _DnsConfigChange
    },
    HealthCheckConfig: {
      shape: _HealthCheckConfig
    }
  }
};
