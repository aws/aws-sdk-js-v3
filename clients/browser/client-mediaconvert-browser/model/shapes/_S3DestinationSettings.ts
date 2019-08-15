import { _S3EncryptionSettings } from "./_S3EncryptionSettings";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _S3DestinationSettings: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Encryption: {
      shape: _S3EncryptionSettings,
      locationName: "encryption"
    }
  }
};
