import { _OutputLocationRef } from "./_OutputLocationRef";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ArchiveGroupSettings: _Structure_ = {
  type: "structure",
  required: ["Destination"],
  members: {
    Destination: {
      shape: _OutputLocationRef,
      locationName: "destination"
    },
    RolloverInterval: {
      shape: {
        type: "integer",
        min: 1
      },
      locationName: "rolloverInterval"
    }
  }
};
