import { _TagList } from "./_TagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CopyDBClusterParameterGroupInput: _Structure_ = {
  type: "structure",
  required: [
    "SourceDBClusterParameterGroupIdentifier",
    "TargetDBClusterParameterGroupIdentifier",
    "TargetDBClusterParameterGroupDescription"
  ],
  members: {
    SourceDBClusterParameterGroupIdentifier: {
      shape: {
        type: "string"
      }
    },
    TargetDBClusterParameterGroupIdentifier: {
      shape: {
        type: "string"
      }
    },
    TargetDBClusterParameterGroupDescription: {
      shape: {
        type: "string"
      }
    },
    Tags: {
      shape: _TagList
    }
  }
};
