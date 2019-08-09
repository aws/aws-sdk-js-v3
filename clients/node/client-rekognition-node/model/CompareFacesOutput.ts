import { _ComparedSourceImageFace } from "./_ComparedSourceImageFace";
import { _CompareFacesMatchList } from "./_CompareFacesMatchList";
import { _CompareFacesUnmatchList } from "./_CompareFacesUnmatchList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CompareFacesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    SourceImageFace: {
      shape: _ComparedSourceImageFace
    },
    FaceMatches: {
      shape: _CompareFacesMatchList
    },
    UnmatchedFaces: {
      shape: _CompareFacesUnmatchList
    },
    SourceImageOrientationCorrection: {
      shape: {
        type: "string"
      }
    },
    TargetImageOrientationCorrection: {
      shape: {
        type: "string"
      }
    }
  }
};
