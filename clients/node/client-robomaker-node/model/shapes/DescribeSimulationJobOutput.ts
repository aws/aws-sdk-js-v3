import { _OutputLocation } from "./_OutputLocation";
import { _RobotApplicationConfigs } from "./_RobotApplicationConfigs";
import { _SimulationApplicationConfigs } from "./_SimulationApplicationConfigs";
import { _TagMap } from "./_TagMap";
import { _VPCConfigResponse } from "./_VPCConfigResponse";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeSimulationJobOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    arn: {
      shape: {
        type: "string",
        min: 1
      }
    },
    name: {
      shape: {
        type: "string",
        min: 1
      }
    },
    status: {
      shape: {
        type: "string"
      }
    },
    lastStartedAt: {
      shape: {
        type: "timestamp"
      }
    },
    lastUpdatedAt: {
      shape: {
        type: "timestamp"
      }
    },
    failureBehavior: {
      shape: {
        type: "string"
      }
    },
    failureCode: {
      shape: {
        type: "string"
      }
    },
    failureReason: {
      shape: {
        type: "string"
      }
    },
    clientRequestToken: {
      shape: {
        type: "string",
        min: 1
      }
    },
    outputLocation: {
      shape: _OutputLocation
    },
    maxJobDurationInSeconds: {
      shape: {
        type: "integer"
      }
    },
    simulationTimeMillis: {
      shape: {
        type: "integer"
      }
    },
    iamRole: {
      shape: {
        type: "string",
        min: 1
      }
    },
    robotApplications: {
      shape: _RobotApplicationConfigs
    },
    simulationApplications: {
      shape: _SimulationApplicationConfigs
    },
    tags: {
      shape: _TagMap
    },
    vpcConfig: {
      shape: _VPCConfigResponse
    }
  }
};
