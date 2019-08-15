import { _SourceConfigs } from "./_SourceConfigs";
import { _RobotSoftwareSuite } from "./_RobotSoftwareSuite";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateRobotApplicationInput: _Structure_ = {
  type: "structure",
  required: ["application", "sources", "robotSoftwareSuite"],
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
    robotSoftwareSuite: {
      shape: _RobotSoftwareSuite
    },
    currentRevisionId: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
