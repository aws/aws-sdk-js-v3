import { _RevisionLocation } from "./_RevisionLocation";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const RegisterApplicationRevisionInput: _Structure_ = {
  type: "structure",
  required: ["applicationName", "revision"],
  members: {
    applicationName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    description: {
      shape: {
        type: "string"
      }
    },
    revision: {
      shape: _RevisionLocation
    }
  }
};
