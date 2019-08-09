import { _FaceSearchSettings } from "./_FaceSearchSettings";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _StreamProcessorSettings: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    FaceSearch: {
      shape: _FaceSearchSettings
    }
  }
};
