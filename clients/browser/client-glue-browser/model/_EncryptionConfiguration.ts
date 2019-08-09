import { _S3EncryptionList } from "./_S3EncryptionList";
import { _CloudWatchEncryption } from "./_CloudWatchEncryption";
import { _JobBookmarksEncryption } from "./_JobBookmarksEncryption";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _EncryptionConfiguration: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    S3Encryption: {
      shape: _S3EncryptionList
    },
    CloudWatchEncryption: {
      shape: _CloudWatchEncryption
    },
    JobBookmarksEncryption: {
      shape: _JobBookmarksEncryption
    }
  }
};
