import { Structure as _Structure_ } from "@aws-sdk/types";

export const DownloadDBLogFilePortionOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    LogFileData: {
      shape: {
        type: "string"
      }
    },
    Marker: {
      shape: {
        type: "string"
      }
    },
    AdditionalDataPending: {
      shape: {
        type: "boolean"
      }
    }
  }
};
