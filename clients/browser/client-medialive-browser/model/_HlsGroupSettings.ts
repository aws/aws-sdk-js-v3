import { ___listOfHlsAdMarkers } from "./___listOfHlsAdMarkers";
import { ___listOfCaptionLanguageMapping } from "./___listOfCaptionLanguageMapping";
import { _OutputLocationRef } from "./_OutputLocationRef";
import { _HlsCdnSettings } from "./_HlsCdnSettings";
import { _KeyProviderSettings } from "./_KeyProviderSettings";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _HlsGroupSettings: _Structure_ = {
  type: "structure",
  required: ["Destination"],
  members: {
    AdMarkers: {
      shape: ___listOfHlsAdMarkers,
      locationName: "adMarkers"
    },
    BaseUrlContent: {
      shape: {
        type: "string"
      },
      locationName: "baseUrlContent"
    },
    BaseUrlManifest: {
      shape: {
        type: "string"
      },
      locationName: "baseUrlManifest"
    },
    CaptionLanguageMappings: {
      shape: ___listOfCaptionLanguageMapping,
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
    ConstantIv: {
      shape: {
        type: "string",
        min: 32
      },
      locationName: "constantIv"
    },
    Destination: {
      shape: _OutputLocationRef,
      locationName: "destination"
    },
    DirectoryStructure: {
      shape: {
        type: "string"
      },
      locationName: "directoryStructure"
    },
    EncryptionType: {
      shape: {
        type: "string"
      },
      locationName: "encryptionType"
    },
    HlsCdnSettings: {
      shape: _HlsCdnSettings,
      locationName: "hlsCdnSettings"
    },
    IFrameOnlyPlaylists: {
      shape: {
        type: "string"
      },
      locationName: "iFrameOnlyPlaylists"
    },
    IndexNSegments: {
      shape: {
        type: "integer",
        min: 3
      },
      locationName: "indexNSegments"
    },
    InputLossAction: {
      shape: {
        type: "string"
      },
      locationName: "inputLossAction"
    },
    IvInManifest: {
      shape: {
        type: "string"
      },
      locationName: "ivInManifest"
    },
    IvSource: {
      shape: {
        type: "string"
      },
      locationName: "ivSource"
    },
    KeepSegments: {
      shape: {
        type: "integer",
        min: 1
      },
      locationName: "keepSegments"
    },
    KeyFormat: {
      shape: {
        type: "string"
      },
      locationName: "keyFormat"
    },
    KeyFormatVersions: {
      shape: {
        type: "string"
      },
      locationName: "keyFormatVersions"
    },
    KeyProviderSettings: {
      shape: _KeyProviderSettings,
      locationName: "keyProviderSettings"
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
    MinSegmentLength: {
      shape: {
        type: "integer"
      },
      locationName: "minSegmentLength"
    },
    Mode: {
      shape: {
        type: "string"
      },
      locationName: "mode"
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
    RedundantManifest: {
      shape: {
        type: "string"
      },
      locationName: "redundantManifest"
    },
    SegmentLength: {
      shape: {
        type: "integer",
        min: 1
      },
      locationName: "segmentLength"
    },
    SegmentationMode: {
      shape: {
        type: "string"
      },
      locationName: "segmentationMode"
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
        type: "integer"
      },
      locationName: "timedMetadataId3Period"
    },
    TimestampDeltaMilliseconds: {
      shape: {
        type: "integer"
      },
      locationName: "timestampDeltaMilliseconds"
    },
    TsFileMode: {
      shape: {
        type: "string"
      },
      locationName: "tsFileMode"
    }
  }
};
