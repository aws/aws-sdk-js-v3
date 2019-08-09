import { _RevisionLocation } from "./_RevisionLocation";
import { _GenericRevisionInfo } from "./_GenericRevisionInfo";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetApplicationRevisionOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    applicationName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    revision: {
      shape: _RevisionLocation
    },
    revisionInfo: {
      shape: _GenericRevisionInfo
    }
  }
};
