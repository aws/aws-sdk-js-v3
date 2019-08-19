import { _ListOfSegmentDimensions } from "./_ListOfSegmentDimensions";
import { _ListOfSegmentReference } from "./_ListOfSegmentReference";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _SegmentGroup: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Dimensions: {
      shape: _ListOfSegmentDimensions
    },
    SourceSegments: {
      shape: _ListOfSegmentReference
    },
    SourceType: {
      shape: {
        type: "string"
      }
    },
    Type: {
      shape: {
        type: "string"
      }
    }
  }
};
