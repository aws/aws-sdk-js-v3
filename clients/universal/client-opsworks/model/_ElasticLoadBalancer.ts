import { _Strings } from "./_Strings";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ElasticLoadBalancer: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ElasticLoadBalancerName: {
      shape: {
        type: "string"
      }
    },
    Region: {
      shape: {
        type: "string"
      }
    },
    DnsName: {
      shape: {
        type: "string"
      }
    },
    StackId: {
      shape: {
        type: "string"
      }
    },
    LayerId: {
      shape: {
        type: "string"
      }
    },
    VpcId: {
      shape: {
        type: "string"
      }
    },
    AvailabilityZones: {
      shape: _Strings
    },
    SubnetIds: {
      shape: _Strings
    },
    Ec2InstanceIds: {
      shape: _Strings
    }
  }
};
