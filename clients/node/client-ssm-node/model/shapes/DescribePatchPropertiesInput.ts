import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribePatchPropertiesInput: _Structure_ = {
  type: "structure",
  required: ["OperatingSystem", "Property"],
  members: {
    OperatingSystem: {
      shape: {
        type: "string"
      }
    },
    Property: {
      shape: {
        type: "string"
      }
    },
    PatchSet: {
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
