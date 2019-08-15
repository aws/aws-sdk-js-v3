import { _SourceConfigs } from "./_SourceConfigs";
import { _SimulationSoftwareSuite } from "./_SimulationSoftwareSuite";
import { _RobotSoftwareSuite } from "./_RobotSoftwareSuite";
import { _RenderingEngine } from "./_RenderingEngine";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateSimulationApplicationInput: _Structure_ = {
  type: "structure",
  required: [
    "application",
    "sources",
    "simulationSoftwareSuite",
    "robotSoftwareSuite",
    "renderingEngine"
  ],
  members: {
    application: {
      shape: {
        type: "string",
        min: 1
      }
    },
    sources: {
      shape: _SourceConfigs
    },
    simulationSoftwareSuite: {
      shape: _SimulationSoftwareSuite
    },
    robotSoftwareSuite: {
      shape: _RobotSoftwareSuite
    },
    renderingEngine: {
      shape: _RenderingEngine
    },
    currentRevisionId: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
