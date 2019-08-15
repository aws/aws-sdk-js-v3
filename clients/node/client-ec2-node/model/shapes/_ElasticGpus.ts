import { _ElasticGpuHealth } from "./_ElasticGpuHealth";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ElasticGpus: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ElasticGpuId: {
      shape: {
        type: "string"
      },
      locationName: "elasticGpuId"
    },
    AvailabilityZone: {
      shape: {
        type: "string"
      },
      locationName: "availabilityZone"
    },
    ElasticGpuType: {
      shape: {
        type: "string"
      },
      locationName: "elasticGpuType"
    },
    ElasticGpuHealth: {
      shape: _ElasticGpuHealth,
      locationName: "elasticGpuHealth"
    },
    ElasticGpuState: {
      shape: {
        type: "string"
      },
      locationName: "elasticGpuState"
    },
    InstanceId: {
      shape: {
        type: "string"
      },
      locationName: "instanceId"
    }
  }
};
