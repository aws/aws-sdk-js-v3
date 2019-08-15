import { _ResourceList } from "./_ResourceList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribePrincipalIdFormatInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    DryRun: {
      shape: {
        type: "boolean"
      }
    },
    Resources: {
      shape: _ResourceList,
      locationName: "Resource"
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
