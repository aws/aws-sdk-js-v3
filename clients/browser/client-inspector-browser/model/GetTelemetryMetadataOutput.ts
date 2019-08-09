import { _TelemetryMetadataList } from "./_TelemetryMetadataList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetTelemetryMetadataOutput: _Structure_ = {
  type: "structure",
  required: ["telemetryMetadata"],
  members: {
    telemetryMetadata: {
      shape: _TelemetryMetadataList
    }
  }
};
