import { _EncryptionAtRestOptions } from "./_EncryptionAtRestOptions";
import { _OptionStatus } from "./_OptionStatus";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _EncryptionAtRestOptionsStatus: _Structure_ = {
  type: "structure",
  required: ["Options", "Status"],
  members: {
    Options: {
      shape: _EncryptionAtRestOptions
    },
    Status: {
      shape: _OptionStatus
    }
  }
};
