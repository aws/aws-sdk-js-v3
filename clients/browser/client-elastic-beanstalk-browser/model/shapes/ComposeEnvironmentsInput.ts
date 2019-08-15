import { _VersionLabels } from "./_VersionLabels";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ComposeEnvironmentsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ApplicationName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    GroupName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    VersionLabels: {
      shape: _VersionLabels
    }
  }
};
