import { _DirectoryVpcSettings } from "./_DirectoryVpcSettings";
import { _Tags } from "./_Tags";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateDirectoryInput: _Structure_ = {
  type: "structure",
  required: ["Name", "Password", "Size"],
  members: {
    Name: {
      shape: {
        type: "string"
      }
    },
    ShortName: {
      shape: {
        type: "string"
      }
    },
    Password: {
      shape: {
        type: "string",
        sensitive: true
      }
    },
    Description: {
      shape: {
        type: "string"
      }
    },
    Size: {
      shape: {
        type: "string"
      }
    },
    VpcSettings: {
      shape: _DirectoryVpcSettings
    },
    Tags: {
      shape: _Tags
    }
  }
};
