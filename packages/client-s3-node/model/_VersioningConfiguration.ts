import { Structure as _Structure_ } from "@aws-sdk/types";

export const _VersioningConfiguration: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    MFADelete: {
      shape: {
        type: "string"
      },
      locationName: "MfaDelete"
    },
    Status: {
      shape: {
        type: "string"
      }
    }
  }
};
