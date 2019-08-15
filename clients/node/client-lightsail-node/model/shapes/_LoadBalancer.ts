import { _ResourceLocation } from "./_ResourceLocation";
import { _TagList } from "./_TagList";
import { _PortList } from "./_PortList";
import { _InstanceHealthSummaryList } from "./_InstanceHealthSummaryList";
import { _LoadBalancerTlsCertificateSummaryList } from "./_LoadBalancerTlsCertificateSummaryList";
import { _LoadBalancerConfigurationOptions } from "./_LoadBalancerConfigurationOptions";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _LoadBalancer: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    name: {
      shape: {
        type: "string"
      }
    },
    arn: {
      shape: {
        type: "string"
      }
    },
    supportCode: {
      shape: {
        type: "string"
      }
    },
    createdAt: {
      shape: {
        type: "timestamp"
      }
    },
    location: {
      shape: _ResourceLocation
    },
    resourceType: {
      shape: {
        type: "string"
      }
    },
    tags: {
      shape: _TagList
    },
    dnsName: {
      shape: {
        type: "string"
      }
    },
    state: {
      shape: {
        type: "string"
      }
    },
    protocol: {
      shape: {
        type: "string"
      }
    },
    publicPorts: {
      shape: _PortList
    },
    healthCheckPath: {
      shape: {
        type: "string"
      }
    },
    instancePort: {
      shape: {
        type: "integer"
      }
    },
    instanceHealthSummary: {
      shape: _InstanceHealthSummaryList
    },
    tlsCertificateSummaries: {
      shape: _LoadBalancerTlsCertificateSummaryList
    },
    configurationOptions: {
      shape: _LoadBalancerConfigurationOptions
    }
  }
};
