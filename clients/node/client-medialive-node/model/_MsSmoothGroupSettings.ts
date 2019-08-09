import { _OutputLocationRef } from "./_OutputLocationRef";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _MsSmoothGroupSettings: _Structure_ = {
  type: "structure",
  required: ["Destination"],
  members: {
    AcquisitionPointId: {
      shape: {
        type: "string"
      },
      locationName: "acquisitionPointId"
    },
    AudioOnlyTimecodeControl: {
      shape: {
        type: "string"
      },
      locationName: "audioOnlyTimecodeControl"
    },
    CertificateMode: {
      shape: {
        type: "string"
      },
      locationName: "certificateMode"
    },
    ConnectionRetryInterval: {
      shape: {
        type: "integer"
      },
      locationName: "connectionRetryInterval"
    },
    Destination: {
      shape: _OutputLocationRef,
      locationName: "destination"
    },
    EventId: {
      shape: {
        type: "string"
      },
      locationName: "eventId"
    },
    EventIdMode: {
      shape: {
        type: "string"
      },
      locationName: "eventIdMode"
    },
    EventStopBehavior: {
      shape: {
        type: "string"
      },
      locationName: "eventStopBehavior"
    },
    FilecacheDuration: {
      shape: {
        type: "integer"
      },
      locationName: "filecacheDuration"
    },
    FragmentLength: {
      shape: {
        type: "integer",
        min: 1
      },
      locationName: "fragmentLength"
    },
    InputLossAction: {
      shape: {
        type: "string"
      },
      locationName: "inputLossAction"
    },
    NumRetries: {
      shape: {
        type: "integer"
      },
      locationName: "numRetries"
    },
    RestartDelay: {
      shape: {
        type: "integer"
      },
      locationName: "restartDelay"
    },
    SegmentationMode: {
      shape: {
        type: "string"
      },
      locationName: "segmentationMode"
    },
    SendDelayMs: {
      shape: {
        type: "integer"
      },
      locationName: "sendDelayMs"
    },
    SparseTrackType: {
      shape: {
        type: "string"
      },
      locationName: "sparseTrackType"
    },
    StreamManifestBehavior: {
      shape: {
        type: "string"
      },
      locationName: "streamManifestBehavior"
    },
    TimestampOffset: {
      shape: {
        type: "string"
      },
      locationName: "timestampOffset"
    },
    TimestampOffsetMode: {
      shape: {
        type: "string"
      },
      locationName: "timestampOffsetMode"
    }
  }
};
