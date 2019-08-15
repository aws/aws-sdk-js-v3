import { List as _List_ } from "@aws-sdk/types";
import { _EncryptionEntity } from "./_EncryptionEntity";

export const _EncryptionEntityList: _List_ = {
  type: "list",
  member: {
    shape: _EncryptionEntity,
    locationName: "EncryptionEntity"
  }
};
