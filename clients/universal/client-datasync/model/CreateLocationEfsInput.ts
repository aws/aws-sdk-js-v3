import { _Ec2Config } from "./_Ec2Config";
import { _TagList } from "./_TagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateLocationEfsInput: _Structure_ = {
  type: "structure",
  required: ["EfsFilesystemArn", "Ec2Config"],
  members: {
    Subdirectory: {
      shape: {
        type: "string"
      }
    },
    EfsFilesystemArn: {
      shape: {
        type: "string"
      }
    },
    Ec2Config: {
      shape: _Ec2Config
    },
    Tags: {
      shape: _TagList
    }
  }
};
