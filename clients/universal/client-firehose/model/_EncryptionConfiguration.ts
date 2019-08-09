import { _KMSEncryptionConfig } from "./_KMSEncryptionConfig";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _EncryptionConfiguration: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    NoEncryptionConfig: {
      shape: {
        type: "string"
      }
    },
    KMSEncryptionConfig: {
      shape: _KMSEncryptionConfig
    }
  }
};
