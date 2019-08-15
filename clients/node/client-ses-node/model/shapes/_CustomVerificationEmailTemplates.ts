import { List as _List_ } from "@aws-sdk/types";
import { _CustomVerificationEmailTemplate } from "./_CustomVerificationEmailTemplate";

export const _CustomVerificationEmailTemplates: _List_ = {
  type: "list",
  member: {
    shape: _CustomVerificationEmailTemplate
  }
};
