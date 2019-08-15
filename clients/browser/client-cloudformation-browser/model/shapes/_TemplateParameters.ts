import { List as _List_ } from "@aws-sdk/types";
import { _TemplateParameter } from "./_TemplateParameter";

export const _TemplateParameters: _List_ = {
  type: "list",
  member: {
    shape: _TemplateParameter
  }
};
