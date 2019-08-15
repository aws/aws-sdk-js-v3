import { Structure as _Structure_ } from "@aws-sdk/types";

export const _VersioningConfiguration: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    unlimited: {
      shape: {
        type: "boolean"
      }
    },
    maxVersions: {
      shape: {
        type: "integer",
        min: 1
      }
    }
  }
};
