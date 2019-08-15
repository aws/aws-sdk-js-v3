import { _MessageTemplateType } from "./_MessageTemplateType";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _AdminCreateUserConfigType: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AllowAdminCreateUserOnly: {
      shape: {
        type: "boolean"
      }
    },
    UnusedAccountValidityDays: {
      shape: {
        type: "integer"
      }
    },
    InviteMessageTemplate: {
      shape: _MessageTemplateType
    }
  }
};
