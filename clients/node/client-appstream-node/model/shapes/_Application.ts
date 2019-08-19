import { _Metadata } from "./_Metadata";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Application: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Name: {
      shape: {
        type: "string",
        min: 1
      }
    },
    DisplayName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    IconURL: {
      shape: {
        type: "string",
        min: 1
      }
    },
    LaunchPath: {
      shape: {
        type: "string",
        min: 1
      }
    },
    LaunchParameters: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Enabled: {
      shape: {
        type: "boolean"
      }
    },
    Metadata: {
      shape: _Metadata
    }
  }
};
