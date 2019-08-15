import { _OTAUpdatesSummary } from "./_OTAUpdatesSummary";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListOTAUpdatesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    otaUpdates: {
      shape: _OTAUpdatesSummary
    },
    nextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
