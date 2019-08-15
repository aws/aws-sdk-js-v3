import { _TagList } from "./_TagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CopyDBParameterGroupInput: _Structure_ = {
  type: "structure",
  required: [
    "SourceDBParameterGroupIdentifier",
    "TargetDBParameterGroupIdentifier",
    "TargetDBParameterGroupDescription"
  ],
  members: {
    SourceDBParameterGroupIdentifier: {
      shape: {
        type: "string"
      }
    },
    TargetDBParameterGroupIdentifier: {
      shape: {
        type: "string"
      }
    },
    TargetDBParameterGroupDescription: {
      shape: {
        type: "string"
      }
    },
    Tags: {
      shape: _TagList
    }
  }
};
