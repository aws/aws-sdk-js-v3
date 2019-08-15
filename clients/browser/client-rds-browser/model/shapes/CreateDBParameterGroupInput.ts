import { _TagList } from "./_TagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateDBParameterGroupInput: _Structure_ = {
  type: "structure",
  required: ["DBParameterGroupName", "DBParameterGroupFamily", "Description"],
  members: {
    DBParameterGroupName: {
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
