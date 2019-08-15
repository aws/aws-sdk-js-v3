import { ___listOf__integerMin32Max8182 } from "./___listOf__integerMin32Max8182";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _M3u8Settings: _Structure_ = {
  type: "structure",
  required: [],
  members: {
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
    NielsenId3: {
      shape: {
        type: "string"
      },
      locationName: "nielsenId3"
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
    TimedMetadata: {
      shape: {
        type: "string"
      },
      locationName: "timedMetadata"
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
