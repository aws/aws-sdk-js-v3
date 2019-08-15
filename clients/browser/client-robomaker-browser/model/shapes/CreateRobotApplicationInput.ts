import { _SourceConfigs } from "./_SourceConfigs";
import { _RobotSoftwareSuite } from "./_RobotSoftwareSuite";
import { _TagMap } from "./_TagMap";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateRobotApplicationInput: _Structure_ = {
  type: "structure",
  required: ["name", "sources", "robotSoftwareSuite"],
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
    robotSoftwareSuite: {
      shape: _RobotSoftwareSuite
    },
    tags: {
      shape: _TagMap
    }
  }
};
