import { _SimpleEmailPart } from "./_SimpleEmailPart";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _SimpleEmail: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    HtmlPart: {
      shape: _SimpleEmailPart
    },
    Subject: {
      shape: _SimpleEmailPart
    },
    TextPart: {
      shape: _SimpleEmailPart
    }
  }
};
