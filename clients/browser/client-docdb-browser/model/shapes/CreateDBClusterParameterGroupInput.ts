import { _TagList } from "./_TagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateDBClusterParameterGroupInput: _Structure_ = {
  type: "structure",
  required: [
    "DBClusterParameterGroupName",
    "DBParameterGroupFamily",
    "Description"
  ],
  members: {
    DBClusterParameterGroupName: {
      shape: {
        type: "string"
      }
    },
    DBParameterGroupFamily: {
      shape: {
        type: "string"
      }
    },
    Description: {
      shape: {
        type: "string"
      }
    },
    Tags: {
      shape: _TagList
    }
  }
};
