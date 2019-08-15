import { _VersionLabelsList } from "./_VersionLabelsList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeApplicationVersionsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ApplicationName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    VersionLabels: {
      shape: _VersionLabelsList
    },
    MaxRecords: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
