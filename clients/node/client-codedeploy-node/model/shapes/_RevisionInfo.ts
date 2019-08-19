import { _RevisionLocation } from "./_RevisionLocation";
import { _GenericRevisionInfo } from "./_GenericRevisionInfo";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _RevisionInfo: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    revisionLocation: {
      shape: _RevisionLocation
    },
    genericRevisionInfo: {
      shape: _GenericRevisionInfo
    }
  }
};
