import { List as _List_ } from "@aws-sdk/types";
import { _VgwTelemetry } from "./_VgwTelemetry";

export const _VgwTelemetryList: _List_ = {
  type: "list",
  member: {
    shape: _VgwTelemetry,
    locationName: "item"
  }
};
