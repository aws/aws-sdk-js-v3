import { _DirectoryConnectSettings } from "./_DirectoryConnectSettings";
import { _Tags } from "./_Tags";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ConnectDirectoryInput: _Structure_ = {
  type: "structure",
  required: ["Name", "Password", "Size", "ConnectSettings"],
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
        sensitive: true,
        min: 1
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
    ConnectSettings: {
      shape: _DirectoryConnectSettings
    },
    Tags: {
      shape: _Tags
    }
  }
};
