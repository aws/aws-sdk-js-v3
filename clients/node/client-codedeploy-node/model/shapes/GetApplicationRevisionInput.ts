import { _RevisionLocation } from "./_RevisionLocation";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetApplicationRevisionInput: _Structure_ = {
  type: "structure",
  required: ["applicationName", "revision"],
  members: {
    applicationName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    revision: {
      shape: _RevisionLocation
    }
  }
};
