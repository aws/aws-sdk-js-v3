import { _TagList } from "./_TagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateDBSecurityGroupInput: _Structure_ = {
  type: "structure",
  required: ["DBSecurityGroupName", "DBSecurityGroupDescription"],
  members: {
    DBSecurityGroupName: {
      shape: {
        type: "string"
      }
    },
    DBSecurityGroupDescription: {
      shape: {
        type: "string"
      }
    },
    Tags: {
      shape: _TagList
    }
  }
};
