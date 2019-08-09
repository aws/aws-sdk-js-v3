import { _EncryptionAlgorithmOptions } from "./_EncryptionAlgorithmOptions";
import { _HashAlgorithmOptions } from "./_HashAlgorithmOptions";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _SigningConfiguration: _Structure_ = {
  type: "structure",
  required: ["encryptionAlgorithmOptions", "hashAlgorithmOptions"],
  members: {
    encryptionAlgorithmOptions: {
      shape: _EncryptionAlgorithmOptions
    },
    hashAlgorithmOptions: {
      shape: _HashAlgorithmOptions
    }
  }
};
