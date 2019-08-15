import { _EncryptionAtRest } from "./_EncryptionAtRest";
import { _EncryptionInTransit } from "./_EncryptionInTransit";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _EncryptionInfo: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    EncryptionAtRest: {
      shape: _EncryptionAtRest,
      locationName: "encryptionAtRest"
    },
    EncryptionInTransit: {
      shape: _EncryptionInTransit,
      locationName: "encryptionInTransit"
    }
  }
};
