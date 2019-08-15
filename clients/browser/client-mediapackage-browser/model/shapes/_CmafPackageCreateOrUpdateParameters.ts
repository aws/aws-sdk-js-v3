import { _CmafEncryption } from "./_CmafEncryption";
import { ___listOfHlsManifestCreateOrUpdateParameters } from "./___listOfHlsManifestCreateOrUpdateParameters";
import { _StreamSelection } from "./_StreamSelection";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _CmafPackageCreateOrUpdateParameters: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Encryption: {
      shape: _CmafEncryption,
      locationName: "encryption"
    },
    HlsManifests: {
      shape: ___listOfHlsManifestCreateOrUpdateParameters,
      locationName: "hlsManifests"
    },
    SegmentDurationSeconds: {
      shape: {
        type: "integer"
      },
      locationName: "segmentDurationSeconds"
    },
    SegmentPrefix: {
      shape: {
        type: "string"
      },
      locationName: "segmentPrefix"
    },
    StreamSelection: {
      shape: _StreamSelection,
      locationName: "streamSelection"
    }
  }
};
