import { List as _List_ } from "@aws-sdk/types";
import { _AutomationExecutionMetadata } from "./_AutomationExecutionMetadata";

export const _AutomationExecutionMetadataList: _List_ = {
  type: "list",
  member: {
    shape: _AutomationExecutionMetadata
  }
};
