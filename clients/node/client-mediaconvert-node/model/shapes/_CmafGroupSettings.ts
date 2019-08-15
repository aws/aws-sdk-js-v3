import { _DestinationSettings } from "./_DestinationSettings";
import { _CmafEncryptionSettings } from "./_CmafEncryptionSettings";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _CmafGroupSettings: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    BaseUrl: {
      shape: {
        type: "string"
      },
      locationName: "baseUrl"
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
    Encryption: {
      shape: _CmafEncryptionSettings,
      locationName: "encryption"
    },
    FragmentLength: {
      shape: {
        type: "integer",
        min: 1
      },
      locationName: "fragmentLength"
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
    MinBufferTime: {
      shape: {
        type: "integer"
      },
      locationName: "minBufferTime"
    },
    MinFinalSegmentLength: {
      shape: {
        type: "float"
      },
      locationName: "minFinalSegmentLength"
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
    StreamInfResolution: {
      shape: {
        type: "string"
      },
      locationName: "streamInfResolution"
    },
    WriteDashManifest: {
      shape: {
        type: "string"
      },
      locationName: "writeDashManifest"
    },
    WriteHlsManifest: {
      shape: {
        type: "string"
      },
      locationName: "writeHlsManifest"
    }
  }
};
