import { _SegmentDimensions } from "./_SegmentDimensions";
import { _SegmentImportResource } from "./_SegmentImportResource";
import { _SegmentGroupList } from "./_SegmentGroupList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _SegmentResponse: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ApplicationId: {
      shape: {
        type: "string"
      }
    },
    CreationDate: {
      shape: {
        type: "string"
      }
    },
    Dimensions: {
      shape: _SegmentDimensions
    },
    Id: {
      shape: {
        type: "string"
      }
    },
    ImportDefinition: {
      shape: _SegmentImportResource
    },
    LastModifiedDate: {
      shape: {
        type: "string"
      }
    },
    Name: {
      shape: {
        type: "string"
      }
    },
    SegmentGroups: {
      shape: _SegmentGroupList
    },
    SegmentType: {
      shape: {
        type: "string"
      }
    },
    Version: {
      shape: {
        type: "integer"
      }
    }
  }
};
