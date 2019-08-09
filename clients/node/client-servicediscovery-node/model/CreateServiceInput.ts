import { _DnsConfig } from "./_DnsConfig";
import { _HealthCheckConfig } from "./_HealthCheckConfig";
import { _HealthCheckCustomConfig } from "./_HealthCheckCustomConfig";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateServiceInput: _Structure_ = {
  type: "structure",
  required: ["Name"],
  members: {
    Name: {
      shape: {
        type: "string"
      }
    },
    NamespaceId: {
      shape: {
        type: "string"
      }
    },
    CreatorRequestId: {
      shape: {
        type: "string"
      }
    },
    Description: {
      shape: {
        type: "string"
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
    }
  }
};
