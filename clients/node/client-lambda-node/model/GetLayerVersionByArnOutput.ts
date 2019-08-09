import { _LayerVersionContentOutput } from "./_LayerVersionContentOutput";
import { _CompatibleRuntimes } from "./_CompatibleRuntimes";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetLayerVersionByArnOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Content: {
      shape: _LayerVersionContentOutput
    },
    LayerArn: {
      shape: {
        type: "string",
        min: 1
      }
    },
    LayerVersionArn: {
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
    CreatedDate: {
      shape: {
        type: "string"
      }
    },
    Version: {
      shape: {
        type: "integer"
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
