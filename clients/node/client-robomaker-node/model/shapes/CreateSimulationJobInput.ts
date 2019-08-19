import { _OutputLocation } from "./_OutputLocation";
import { _RobotApplicationConfigs } from "./_RobotApplicationConfigs";
import { _SimulationApplicationConfigs } from "./_SimulationApplicationConfigs";
import { _TagMap } from "./_TagMap";
import { _VPCConfig } from "./_VPCConfig";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateSimulationJobInput: _Structure_ = {
  type: "structure",
  required: ["maxJobDurationInSeconds", "iamRole"],
  members: {
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
    iamRole: {
      shape: {
        type: "string",
        min: 1
      }
    },
    failureBehavior: {
      shape: {
        type: "string"
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
      shape: _VPCConfig
    }
  }
};
