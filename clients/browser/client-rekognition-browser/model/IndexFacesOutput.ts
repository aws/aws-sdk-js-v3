import { _FaceRecordList } from "./_FaceRecordList";
import { _UnindexedFaces } from "./_UnindexedFaces";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const IndexFacesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    FaceRecords: {
      shape: _FaceRecordList
    },
    OrientationCorrection: {
      shape: {
        type: "string"
      }
    },
    FaceModelVersion: {
      shape: {
        type: "string"
      }
    },
    UnindexedFaces: {
      shape: _UnindexedFaces
    }
  }
};
