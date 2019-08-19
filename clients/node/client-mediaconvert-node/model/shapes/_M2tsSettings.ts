import { ___listOf__integerMin32Max8182 } from "./___listOf__integerMin32Max8182";
import { _DvbNitSettings } from "./_DvbNitSettings";
import { _DvbSdtSettings } from "./_DvbSdtSettings";
import { _DvbTdtSettings } from "./_DvbTdtSettings";
import { _M2tsScte35Esam } from "./_M2tsScte35Esam";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _M2tsSettings: _Structure_ = {
  type: "structure",
  required: [],
  members: {
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
      shape: ___listOf__integerMin32Max8182,
      locationName: "audioPids"
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
    DvbNitSettings: {
      shape: _DvbNitSettings,
      locationName: "dvbNitSettings"
    },
    DvbSdtSettings: {
      shape: _DvbSdtSettings,
      locationName: "dvbSdtSettings"
    },
    DvbSubPids: {
      shape: ___listOf__integerMin32Max8182,
      locationName: "dvbSubPids"
    },
    DvbTdtSettings: {
      shape: _DvbTdtSettings,
      locationName: "dvbTdtSettings"
    },
    DvbTeletextPid: {
      shape: {
        type: "integer",
        min: 32
      },
      locationName: "dvbTeletextPid"
    },
    EbpAudioInterval: {
      shape: {
        type: "string"
      },
      locationName: "ebpAudioInterval"
    },
    EbpPlacement: {
      shape: {
        type: "string"
      },
      locationName: "ebpPlacement"
    },
    EsRateInPes: {
      shape: {
        type: "string"
      },
      locationName: "esRateInPes"
    },
    ForceTsVideoEbpOrder: {
      shape: {
        type: "string"
      },
      locationName: "forceTsVideoEbpOrder"
    },
    FragmentTime: {
      shape: {
        type: "float"
      },
      locationName: "fragmentTime"
    },
    MaxPcrInterval: {
      shape: {
        type: "integer"
      },
      locationName: "maxPcrInterval"
    },
    MinEbpInterval: {
      shape: {
        type: "integer"
      },
      locationName: "minEbpInterval"
    },
    NielsenId3: {
      shape: {
        type: "string"
      },
      locationName: "nielsenId3"
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
    PcrPid: {
      shape: {
        type: "integer",
        min: 32
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
        type: "integer",
        min: 32
      },
      locationName: "pmtPid"
    },
    PrivateMetadataPid: {
      shape: {
        type: "integer",
        min: 32
      },
      locationName: "privateMetadataPid"
    },
    ProgramNumber: {
      shape: {
        type: "integer"
      },
      locationName: "programNumber"
    },
    RateMode: {
      shape: {
        type: "string"
      },
      locationName: "rateMode"
    },
    Scte35Esam: {
      shape: _M2tsScte35Esam,
      locationName: "scte35Esam"
    },
    Scte35Pid: {
      shape: {
        type: "integer",
        min: 32
      },
      locationName: "scte35Pid"
    },
    Scte35Source: {
      shape: {
        type: "string"
      },
      locationName: "scte35Source"
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
    TimedMetadataPid: {
      shape: {
        type: "integer",
        min: 32
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
        type: "integer",
        min: 32
      },
      locationName: "videoPid"
    }
  }
};
