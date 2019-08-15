import { _DestinationSettings } from "./_DestinationSettings";
import { _DashIsoEncryptionSettings } from "./_DashIsoEncryptionSettings";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DashIsoGroupSettings: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    BaseUrl: {
      shape: {
        type: "string"
      },
      locationName: "baseUrl"
    },
    Destination: {
      shape: {
        type: "string"
      },
      locationName: "destination"
    },
    DestinationSettings: {
      shape: _DestinationSettings,
      locationName: "destinationSettings"
    },
    Encryption: {
      shape: _DashIsoEncryptionSettings,
      locationName: "encryption"
    },
    FragmentLength: {
      shape: {
        type: "integer",
        min: 1
      },
      locationName: "fragmentLength"
    },
    HbbtvCompliance: {
      shape: {
        type: "string"
      },
      locationName: "hbbtvCompliance"
    },
    MinBufferTime: {
      shape: {
        type: "integer"
      },
      locationName: "minBufferTime"
    },
    SegmentControl: {
      shape: {
        type: "string"
      },
      locationName: "segmentControl"
    },
    SegmentLength: {
      shape: {
        type: "integer",
        min: 1
      },
      locationName: "segmentLength"
    },
    WriteSegmentTimelineInRepresentation: {
      shape: {
        type: "string"
      },
      locationName: "writeSegmentTimelineInRepresentation"
    }
  }
};
