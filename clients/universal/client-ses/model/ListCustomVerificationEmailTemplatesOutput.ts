import { _CustomVerificationEmailTemplates } from "./_CustomVerificationEmailTemplates";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListCustomVerificationEmailTemplatesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    CustomVerificationEmailTemplates: {
      shape: _CustomVerificationEmailTemplates
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
