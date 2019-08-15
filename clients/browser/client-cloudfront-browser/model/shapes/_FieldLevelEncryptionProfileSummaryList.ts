import { List as _List_ } from "@aws-sdk/types";
import { _FieldLevelEncryptionProfileSummary } from "./_FieldLevelEncryptionProfileSummary";

export const _FieldLevelEncryptionProfileSummaryList: _List_ = {
  type: "list",
  member: {
    shape: _FieldLevelEncryptionProfileSummary,
    locationName: "FieldLevelEncryptionProfileSummary"
  }
};
