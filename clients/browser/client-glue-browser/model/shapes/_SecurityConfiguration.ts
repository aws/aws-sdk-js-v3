import { _EncryptionConfiguration } from "./_EncryptionConfiguration";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _SecurityConfiguration: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Name: {
      shape: {
        type: "string",
        min: 1
      }
    },
    CreatedTimeStamp: {
      shape: {
        type: "timestamp"
      }
    },
    EncryptionConfiguration: {
      shape: _EncryptionConfiguration
    }
  }
};
