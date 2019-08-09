import { _DvbNitSettings } from "./_DvbNitSettings";
import { _DvbSdtSettings } from "./_DvbSdtSettings";
import { _DvbTdtSettings } from "./_DvbTdtSettings";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _M2tsSettings: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AbsentInputAudioBehavior: {
      shape: {
        type: "string"
      },
      locationName: "absentInputAudioBehavior"
    },
    Arib: {
      shape: {
        type: "string"
      },
      locationName: "arib"
    },
    AribCaptionsPid: {
      shape: {
        type: "string"
      },
      locationName: "aribCaptionsPid"
    },
    AribCaptionsPidControl: {
      shape: {
        type: "string"
      },
      locationName: "aribCaptionsPidControl"
    },
    AudioBufferModel: {
      shape: {
        type: "string"
      },
      locationName: "audioBufferModel"
    },
    AudioFramesPerPes: {
      shape: {
        type: "integer"
      },
      locationName: "audioFramesPerPes"
    },
    AudioPids: {
      shape: {
        type: "string"
      },
      locationName: "audioPids"
    },
    AudioStreamType: {
      shape: {
        type: "string"
      },
      locationName: "audioStreamType"
    },
    Bitrate: {
      shape: {
        type: "integer"
      },
      locationName: "bitrate"
    },
    BufferModel: {
      shape: {
        type: "string"
      },
      locationName: "bufferModel"
    },
    CcDescriptor: {
      shape: {
        type: "string"
      },
      locationName: "ccDescriptor"
    },
    DvbNitSettings: {
      shape: _DvbNitSettings,
      locationName: "dvbNitSettings"
    },
    DvbSdtSettings: {
      shape: _DvbSdtSettings,
      locationName: "dvbSdtSettings"
    },
    DvbSubPids: {
      shape: {
        type: "string"
      },
      locationName: "dvbSubPids"
    },
    DvbTdtSettings: {
      shape: _DvbTdtSettings,
      locationName: "dvbTdtSettings"
    },
    DvbTeletextPid: {
      shape: {
        type: "string"
      },
      locationName: "dvbTeletextPid"
    },
    Ebif: {
      shape: {
        type: "string"
      },
      locationName: "ebif"
    },
    EbpAudioInterval: {
      shape: {
        type: "string"
      },
      locationName: "ebpAudioInterval"
    },
    EbpLookaheadMs: {
      shape: {
        type: "integer"
      },
      locationName: "ebpLookaheadMs"
    },
    EbpPlacement: {
      shape: {
        type: "string"
      },
      locationName: "ebpPlacement"
    },
    EcmPid: {
      shape: {
        type: "string"
      },
      locationName: "ecmPid"
    },
    EsRateInPes: {
      shape: {
        type: "string"
      },
      locationName: "esRateInPes"
    },
    EtvPlatformPid: {
      shape: {
        type: "string"
      },
      locationName: "etvPlatformPid"
    },
    EtvSignalPid: {
      shape: {
        type: "string"
      },
      locationName: "etvSignalPid"
    },
    FragmentTime: {
      shape: {
        type: "float"
      },
      locationName: "fragmentTime"
    },
    Klv: {
      shape: {
        type: "string"
      },
      locationName: "klv"
    },
    KlvDataPids: {
      shape: {
        type: "string"
      },
      locationName: "klvDataPids"
    },
    NullPacketBitrate: {
      shape: {
        type: "float"
      },
      locationName: "nullPacketBitrate"
    },
    PatInterval: {
      shape: {
        type: "integer"
      },
      locationName: "patInterval"
    },
    PcrControl: {
      shape: {
        type: "string"
      },
      locationName: "pcrControl"
    },
    PcrPeriod: {
      shape: {
        type: "integer"
      },
      locationName: "pcrPeriod"
    },
    PcrPid: {
      shape: {
        type: "string"
      },
      locationName: "pcrPid"
    },
    PmtInterval: {
      shape: {
        type: "integer"
      },
      locationName: "pmtInterval"
    },
    PmtPid: {
      shape: {
        type: "string"
      },
      locationName: "pmtPid"
    },
    ProgramNum: {
      shape: {
        type: "integer"
      },
      locationName: "programNum"
    },
    RateMode: {
      shape: {
        type: "string"
      },
      locationName: "rateMode"
    },
    Scte27Pids: {
      shape: {
        type: "string"
      },
      locationName: "scte27Pids"
    },
    Scte35Control: {
      shape: {
        type: "string"
      },
      locationName: "scte35Control"
    },
    Scte35Pid: {
      shape: {
        type: "string"
      },
      locationName: "scte35Pid"
    },
    SegmentationMarkers: {
      shape: {
        type: "string"
      },
      locationName: "segmentationMarkers"
    },
    SegmentationStyle: {
      shape: {
        type: "string"
      },
      locationName: "segmentationStyle"
    },
    SegmentationTime: {
      shape: {
        type: "float"
      },
      locationName: "segmentationTime"
    },
    TimedMetadataBehavior: {
      shape: {
        type: "string"
      },
      locationName: "timedMetadataBehavior"
    },
    TimedMetadataPid: {
      shape: {
        type: "string"
      },
      locationName: "timedMetadataPid"
    },
    TransportStreamId: {
      shape: {
        type: "integer"
      },
      locationName: "transportStreamId"
    },
    VideoPid: {
      shape: {
        type: "string"
      },
      locationName: "videoPid"
    }
  }
};
