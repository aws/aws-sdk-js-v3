import { Structure as _Structure_ } from "@aws-sdk/types";

export const DownloadDBLogFilePortionInput: _Structure_ = {
  type: "structure",
  required: ["DBInstanceIdentifier", "LogFileName"],
  members: {
    DBInstanceIdentifier: {
      shape: {
        type: "string"
      }
    },
    LogFileName: {
      shape: {
        type: "string"
      }
    },
    Marker: {
      shape: {
        type: "string"
      }
    },
    NumberOfLines: {
      shape: {
        type: "integer"
      }
    }
  }
};
