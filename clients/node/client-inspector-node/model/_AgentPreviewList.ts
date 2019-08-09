import { List as _List_ } from "@aws-sdk/types";
import { _AgentPreview } from "./_AgentPreview";

export const _AgentPreviewList: _List_ = {
  type: "list",
  member: {
    shape: _AgentPreview
  }
};
