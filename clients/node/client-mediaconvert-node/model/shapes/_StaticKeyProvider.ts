import { Structure as _Structure_ } from "@aws-sdk/types";

export const _StaticKeyProvider: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    KeyFormat: {
      shape: {
        type: "string"
      },
      locationName: "keyFormat"
    },
    KeyFormatVersions: {
      shape: {
        type: "string"
      },
      locationName: "keyFormatVersions"
    },
    StaticKeyValue: {
      shape: {
        type: "string"
      },
      locationName: "staticKeyValue"
    },
    Url: {
      shape: {
        type: "string"
      },
      locationName: "url"
    }
  }
};
