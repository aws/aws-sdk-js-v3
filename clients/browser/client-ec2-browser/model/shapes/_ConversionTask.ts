import { _ImportInstanceTaskDetails } from "./_ImportInstanceTaskDetails";
import { _ImportVolumeTaskDetails } from "./_ImportVolumeTaskDetails";
import { _TagList } from "./_TagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ConversionTask: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ConversionTaskId: {
      shape: {
        type: "string"
      },
      locationName: "conversionTaskId"
    },
    ExpirationTime: {
      shape: {
        type: "string"
      },
      locationName: "expirationTime"
    },
    ImportInstance: {
      shape: _ImportInstanceTaskDetails,
      locationName: "importInstance"
    },
    ImportVolume: {
      shape: _ImportVolumeTaskDetails,
      locationName: "importVolume"
    },
    State: {
      shape: {
        type: "string"
      },
      locationName: "state"
    },
    StatusMessage: {
      shape: {
        type: "string"
      },
      locationName: "statusMessage"
    },
    Tags: {
      shape: _TagList,
      locationName: "tagSet"
    }
  }
};
