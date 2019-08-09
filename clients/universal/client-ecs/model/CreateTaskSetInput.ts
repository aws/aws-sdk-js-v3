import { _NetworkConfiguration } from "./_NetworkConfiguration";
import { _LoadBalancers } from "./_LoadBalancers";
import { _ServiceRegistries } from "./_ServiceRegistries";
import { _Scale } from "./_Scale";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateTaskSetInput: _Structure_ = {
  type: "structure",
  required: ["service", "cluster", "taskDefinition"],
  members: {
    service: {
      shape: {
        type: "string"
      }
    },
    cluster: {
      shape: {
        type: "string"
      }
    },
    externalId: {
      shape: {
        type: "string"
      }
    },
    taskDefinition: {
      shape: {
        type: "string"
      }
    },
    networkConfiguration: {
      shape: _NetworkConfiguration
    },
    loadBalancers: {
      shape: _LoadBalancers
    },
    serviceRegistries: {
      shape: _ServiceRegistries
    },
    launchType: {
      shape: {
        type: "string"
      }
    },
    platformVersion: {
      shape: {
        type: "string"
      }
    },
    scale: {
      shape: _Scale
    },
    clientToken: {
      shape: {
        type: "string"
      }
    }
  }
};
