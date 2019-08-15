import { _DirectoryVpcSettings } from "./_DirectoryVpcSettings";
import { _Tags } from "./_Tags";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateMicrosoftADInput: _Structure_ = {
  type: "structure",
  required: ["Name", "Password", "VpcSettings"],
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
    VpcSettings: {
      shape: _DirectoryVpcSettings
    },
    Edition: {
      shape: {
        type: "string"
      }
    },
    Tags: {
      shape: _Tags
    }
  }
};
