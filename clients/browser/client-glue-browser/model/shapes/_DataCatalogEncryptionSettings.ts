import { _EncryptionAtRest } from "./_EncryptionAtRest";
import { _ConnectionPasswordEncryption } from "./_ConnectionPasswordEncryption";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DataCatalogEncryptionSettings: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    EncryptionAtRest: {
      shape: _EncryptionAtRest
    },
    ConnectionPasswordEncryption: {
      shape: _ConnectionPasswordEncryption
    }
  }
};
