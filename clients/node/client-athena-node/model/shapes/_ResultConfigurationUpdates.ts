import { _EncryptionConfiguration } from "./_EncryptionConfiguration";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ResultConfigurationUpdates: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    OutputLocation: {
      shape: {
        type: "string"
      }
    },
    RemoveOutputLocation: {
      shape: {
        type: "boolean"
      }
    },
    EncryptionConfiguration: {
      shape: _EncryptionConfiguration
    },
    RemoveEncryptionConfiguration: {
      shape: {
        type: "boolean"
      }
    }
  }
};
