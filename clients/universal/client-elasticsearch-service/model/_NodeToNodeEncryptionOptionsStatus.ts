import { _NodeToNodeEncryptionOptions } from "./_NodeToNodeEncryptionOptions";
import { _OptionStatus } from "./_OptionStatus";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _NodeToNodeEncryptionOptionsStatus: _Structure_ = {
  type: "structure",
  required: ["Options", "Status"],
  members: {
    Options: {
      shape: _NodeToNodeEncryptionOptions
    },
    Status: {
      shape: _OptionStatus
    }
  }
};
