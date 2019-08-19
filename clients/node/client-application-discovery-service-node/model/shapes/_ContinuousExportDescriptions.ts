import { List as _List_ } from "@aws-sdk/types";
import { _ContinuousExportDescription } from "./_ContinuousExportDescription";

export const _ContinuousExportDescriptions: _List_ = {
  type: "list",
  member: {
    shape: _ContinuousExportDescription
  }
};
