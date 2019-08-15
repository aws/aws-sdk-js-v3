import { _MemberFrameworkConfiguration } from "./_MemberFrameworkConfiguration";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _MemberConfiguration: _Structure_ = {
  type: "structure",
  required: ["Name", "FrameworkConfiguration"],
  members: {
    Name: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Description: {
      shape: {
        type: "string"
      }
    },
    FrameworkConfiguration: {
      shape: _MemberFrameworkConfiguration
    }
  }
};
