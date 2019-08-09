import { _SnapshotOptions } from "./_SnapshotOptions";
import { _OptionStatus } from "./_OptionStatus";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _SnapshotOptionsStatus: _Structure_ = {
  type: "structure",
  required: ["Options", "Status"],
  members: {
    Options: {
      shape: _SnapshotOptions
    },
    Status: {
      shape: _OptionStatus
    }
  }
};
