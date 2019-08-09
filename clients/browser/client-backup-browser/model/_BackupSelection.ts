import { _ResourceArns } from "./_ResourceArns";
import { _ListOfTags } from "./_ListOfTags";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _BackupSelection: _Structure_ = {
  type: "structure",
  required: ["SelectionName", "IamRoleArn"],
  members: {
    SelectionName: {
      shape: {
        type: "string"
      }
    },
    IamRoleArn: {
      shape: {
        type: "string"
      }
    },
    Resources: {
      shape: _ResourceArns
    },
    ListOfTags: {
      shape: _ListOfTags
    }
  }
};
