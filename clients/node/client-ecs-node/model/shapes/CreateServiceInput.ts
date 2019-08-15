import { _LoadBalancers } from "./_LoadBalancers";
import { _ServiceRegistries } from "./_ServiceRegistries";
import { _DeploymentConfiguration } from "./_DeploymentConfiguration";
import { _PlacementConstraints } from "./_PlacementConstraints";
import { _PlacementStrategies } from "./_PlacementStrategies";
import { _NetworkConfiguration } from "./_NetworkConfiguration";
import { _DeploymentController } from "./_DeploymentController";
import { _Tags } from "./_Tags";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateServiceInput: _Structure_ = {
  type: "structure",
  required: ["serviceName"],
  members: {
    cluster: {
      shape: {
        type: "string"
      }
    },
    serviceName: {
      shape: {
        type: "string"
      }
    },
    taskDefinition: {
      shape: {
        type: "string"
      }
    },
    loadBalancers: {
      shape: _LoadBalancers
    },
    serviceRegistries: {
      shape: _ServiceRegistries
    },
    desiredCount: {
      shape: {
        type: "integer"
      }
    },
    clientToken: {
      shape: {
        type: "string"
      }
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
    role: {
      shape: {
        type: "string"
      }
    },
    deploymentConfiguration: {
      shape: _DeploymentConfiguration
    },
    placementConstraints: {
      shape: _PlacementConstraints
    },
    placementStrategy: {
      shape: _PlacementStrategies
    },
    networkConfiguration: {
      shape: _NetworkConfiguration
    },
    healthCheckGracePeriodSeconds: {
      shape: {
        type: "integer"
      }
    },
    schedulingStrategy: {
      shape: {
        type: "string"
      }
    },
    deploymentController: {
      shape: _DeploymentController
    },
    tags: {
      shape: _Tags
    },
    enableECSManagedTags: {
      shape: {
        type: "boolean"
      }
    },
    propagateTags: {
      shape: {
        type: "string"
      }
    }
  }
};
