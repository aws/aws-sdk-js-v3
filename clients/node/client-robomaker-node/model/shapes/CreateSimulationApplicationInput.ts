import { _SourceConfigs } from "./_SourceConfigs";
import { _SimulationSoftwareSuite } from "./_SimulationSoftwareSuite";
import { _RobotSoftwareSuite } from "./_RobotSoftwareSuite";
import { _RenderingEngine } from "./_RenderingEngine";
import { _TagMap } from "./_TagMap";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateSimulationApplicationInput: _Structure_ = {
  type: "structure",
  required: [
    "name",
    "sources",
    "simulationSoftwareSuite",
    "robotSoftwareSuite",
    "renderingEngine"
  ],
  members: {
    name: {
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
    tags: {
      shape: _TagMap
    }
  }
};
