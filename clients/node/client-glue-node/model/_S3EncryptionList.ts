import { List as _List_ } from "@aws-sdk/types";
import { _S3Encryption } from "./_S3Encryption";

export const _S3EncryptionList: _List_ = {
  type: "list",
  member: {
    shape: _S3Encryption
  }
};
