import { List as _List_ } from "@aws-sdk/types";
import { _PipelineDescription } from "./_PipelineDescription";

export const _PipelineDescriptionList: _List_ = {
  type: "list",
  member: {
    shape: _PipelineDescription
  }
};
