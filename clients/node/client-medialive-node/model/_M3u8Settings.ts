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
      shape: {
        type: "string"
      },
      locationName: "audioPids"
    },
    EcmPid: {
      shape: {
        type: "string"
      },
      locationName: "ecmPid"
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
    Scte35Behavior: {
      shape: {
        type: "string"
      },
      locationName: "scte35Behavior"
    },
    Scte35Pid: {
      shape: {
        type: "string"
      },
      locationName: "scte35Pid"
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
