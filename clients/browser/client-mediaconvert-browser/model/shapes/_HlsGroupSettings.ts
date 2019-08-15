import { ___listOfHlsAdMarkers } from "./___listOfHlsAdMarkers";
import { ___listOfHlsCaptionLanguageMapping } from "./___listOfHlsCaptionLanguageMapping";
import { _DestinationSettings } from "./_DestinationSettings";
import { _HlsEncryptionSettings } from "./_HlsEncryptionSettings";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _HlsGroupSettings: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AdMarkers: {
      shape: ___listOfHlsAdMarkers,
      locationName: "adMarkers"
    },
    BaseUrl: {
      shape: {
        type: "string"
      },
      locationName: "baseUrl"
    },
    CaptionLanguageMappings: {
      shape: ___listOfHlsCaptionLanguageMapping,
      locationName: "captionLanguageMappings"
    },
    CaptionLanguageSetting: {
      shape: {
        type: "string"
      },
      locationName: "captionLanguageSetting"
    },
    ClientCache: {
      shape: {
        type: "string"
      },
      locationName: "clientCache"
    },
    CodecSpecification: {
      shape: {
        type: "string"
      },
      locationName: "codecSpecification"
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
    DirectoryStructure: {
      shape: {
        type: "string"
      },
      locationName: "directoryStructure"
    },
    Encryption: {
      shape: _HlsEncryptionSettings,
      locationName: "encryption"
    },
    ManifestCompression: {
      shape: {
        type: "string"
      },
      locationName: "manifestCompression"
    },
    ManifestDurationFormat: {
      shape: {
        type: "string"
      },
      locationName: "manifestDurationFormat"
    },
    MinFinalSegmentLength: {
      shape: {
        type: "float"
      },
      locationName: "minFinalSegmentLength"
    },
    MinSegmentLength: {
      shape: {
        type: "integer"
      },
      locationName: "minSegmentLength"
    },
    OutputSelection: {
      shape: {
        type: "string"
      },
      locationName: "outputSelection"
    },
    ProgramDateTime: {
      shape: {
        type: "string"
      },
      locationName: "programDateTime"
    },
    ProgramDateTimePeriod: {
      shape: {
        type: "integer"
      },
      locationName: "programDateTimePeriod"
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
    SegmentsPerSubdirectory: {
      shape: {
        type: "integer",
        min: 1
      },
      locationName: "segmentsPerSubdirectory"
    },
    StreamInfResolution: {
      shape: {
        type: "string"
      },
      locationName: "streamInfResolution"
    },
    TimedMetadataId3Frame: {
      shape: {
        type: "string"
      },
      locationName: "timedMetadataId3Frame"
    },
    TimedMetadataId3Period: {
      shape: {
        type: "integer",
        min: -2147483648
      },
      locationName: "timedMetadataId3Period"
    },
    TimestampDeltaMilliseconds: {
      shape: {
        type: "integer",
        min: -2147483648
      },
      locationName: "timestampDeltaMilliseconds"
    }
  }
};
