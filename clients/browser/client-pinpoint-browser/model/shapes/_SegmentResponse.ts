import { _SegmentDimensions } from "./_SegmentDimensions";
import { _SegmentImportResource } from "./_SegmentImportResource";
import { _SegmentGroupList } from "./_SegmentGroupList";
import { _MapOf__string } from "./_MapOf__string";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _SegmentResponse: _Structure_ = {
  type: "structure",
  required: ["SegmentType", "CreationDate", "Id", "Arn", "ApplicationId"],
  members: {
    ApplicationId: {
      shape: {
        type: "string"
      }
    },
    Arn: {
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
    tags: {
      shape: _MapOf__string,
      locationName: "tags"
    },
    Version: {
      shape: {
        type: "integer"
      }
    }
  }
};
