import { _Targets } from "./_Targets";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeMaintenanceWindowsForTargetInput: _Structure_ = {
  type: "structure",
  required: ["Targets", "ResourceType"],
  members: {
    Targets: {
      shape: _Targets
    },
    ResourceType: {
      shape: {
        type: "string"
      }
    },
    MaxResults: {
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
