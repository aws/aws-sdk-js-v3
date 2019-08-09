import { _CollectionIdList } from "./_CollectionIdList";
import { _FaceModelVersionList } from "./_FaceModelVersionList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListCollectionsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    CollectionIds: {
      shape: _CollectionIdList
    },
    NextToken: {
      shape: {
        type: "string"
      }
    },
    FaceModelVersions: {
      shape: _FaceModelVersionList
    }
  }
};
