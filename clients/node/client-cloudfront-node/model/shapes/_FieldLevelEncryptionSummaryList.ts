import { List as _List_ } from "@aws-sdk/types";
import { _FieldLevelEncryptionSummary } from "./_FieldLevelEncryptionSummary";

export const _FieldLevelEncryptionSummaryList: _List_ = {
  type: "list",
  member: {
    shape: _FieldLevelEncryptionSummary,
    locationName: "FieldLevelEncryptionSummary"
  }
};
