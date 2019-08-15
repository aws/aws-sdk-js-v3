import { _DnsConfig } from "./_DnsConfig";
import { _HealthCheckConfig } from "./_HealthCheckConfig";
import { _HealthCheckCustomConfig } from "./_HealthCheckCustomConfig";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ServiceSummary: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Id: {
      shape: {
        type: "string"
      }
    },
    Arn: {
      shape: {
        type: "string"
      }
    },
    Name: {
      shape: {
        type: "string"
      }
    },
    Description: {
      shape: {
        type: "string"
      }
    },
    InstanceCount: {
      shape: {
        type: "integer"
      }
    },
    DnsConfig: {
      shape: _DnsConfig
    },
    HealthCheckConfig: {
      shape: _HealthCheckConfig
    },
    HealthCheckCustomConfig: {
      shape: _HealthCheckCustomConfig
    },
    CreateDate: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
