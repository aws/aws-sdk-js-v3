import { _CompatibleRuntimes } from "./_CompatibleRuntimes";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _LayerVersionsListItem: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    LayerVersionArn: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Version: {
      shape: {
        type: "integer"
      }
    },
    Description: {
      shape: {
        type: "string"
      }
    },
    CreatedDate: {
      shape: {
        type: "string"
      }
    },
    CompatibleRuntimes: {
      shape: _CompatibleRuntimes
    },
    LicenseInfo: {
      shape: {
        type: "string"
      }
    }
  }
};
