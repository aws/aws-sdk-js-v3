import { _Scte35DeliveryRestrictions } from "./_Scte35DeliveryRestrictions";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Scte35SegmentationDescriptor: _Structure_ = {
  type: "structure",
  required: ["SegmentationEventId", "SegmentationCancelIndicator"],
  members: {
    DeliveryRestrictions: {
      shape: _Scte35DeliveryRestrictions,
      locationName: "deliveryRestrictions"
    },
    SegmentNum: {
      shape: {
        type: "integer"
      },
      locationName: "segmentNum"
    },
    SegmentationCancelIndicator: {
      shape: {
        type: "string"
      },
      locationName: "segmentationCancelIndicator"
    },
    SegmentationDuration: {
      shape: {
        type: "integer"
      },
      locationName: "segmentationDuration"
    },
    SegmentationEventId: {
      shape: {
        type: "integer"
      },
      locationName: "segmentationEventId"
    },
    SegmentationTypeId: {
      shape: {
        type: "integer"
      },
      locationName: "segmentationTypeId"
    },
    SegmentationUpid: {
      shape: {
        type: "string"
      },
      locationName: "segmentationUpid"
    },
    SegmentationUpidType: {
      shape: {
        type: "integer"
      },
      locationName: "segmentationUpidType"
    },
    SegmentsExpected: {
      shape: {
        type: "integer"
      },
      locationName: "segmentsExpected"
    },
    SubSegmentNum: {
      shape: {
        type: "integer"
      },
      locationName: "subSegmentNum"
    },
    SubSegmentsExpected: {
      shape: {
        type: "integer"
      },
      locationName: "subSegmentsExpected"
    }
  }
};
