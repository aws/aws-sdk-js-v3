import { _Platforms } from "./_Platforms";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _BundleDetails: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    bundleId: {
      shape: {
        type: "string"
      }
    },
    title: {
      shape: {
        type: "string"
      }
    },
    version: {
      shape: {
        type: "string"
      }
    },
    description: {
      shape: {
        type: "string"
      }
    },
    iconUrl: {
      shape: {
        type: "string"
      }
    },
    availablePlatforms: {
      shape: _Platforms
    }
  }
};
