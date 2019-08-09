import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListFieldLevelEncryptionProfilesInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Marker: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "Marker"
    },
    MaxItems: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "MaxItems"
    }
  }
};
