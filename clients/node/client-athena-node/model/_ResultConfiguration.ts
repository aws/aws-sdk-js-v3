import { _EncryptionConfiguration } from "./_EncryptionConfiguration";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ResultConfiguration: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    OutputLocation: {
      shape: {
        type: "string"
      }
    },
    EncryptionConfiguration: {
      shape: _EncryptionConfiguration
    }
  }
};
