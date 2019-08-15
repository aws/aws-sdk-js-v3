import { _LayerVersionContentInput } from "./_LayerVersionContentInput";
import { _CompatibleRuntimes } from "./_CompatibleRuntimes";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const PublishLayerVersionInput: _Structure_ = {
  type: "structure",
  required: ["LayerName", "Content"],
  members: {
    LayerName: {
      shape: {
        type: "string",
        min: 1
      },
      location: "uri",
      locationName: "LayerName"
    },
    Description: {
      shape: {
        type: "string"
      }
    },
    Content: {
      shape: _LayerVersionContentInput
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
