import { _OptionStatus } from "./_OptionStatus";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _AvailabilityOptionsStatus: _Structure_ = {
  type: "structure",
  required: ["Options", "Status"],
  members: {
    Options: {
      shape: {
        type: "boolean"
      }
    },
    Status: {
      shape: _OptionStatus
    }
  }
};
