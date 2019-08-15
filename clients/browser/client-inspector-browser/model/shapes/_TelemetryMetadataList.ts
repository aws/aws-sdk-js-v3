import { List as _List_ } from "@aws-sdk/types";
import { _TelemetryMetadata } from "./_TelemetryMetadata";

export const _TelemetryMetadataList: _List_ = {
  type: "list",
  member: {
    shape: _TelemetryMetadata
  }
};
