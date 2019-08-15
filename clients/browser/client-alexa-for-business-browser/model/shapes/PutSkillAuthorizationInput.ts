import { _AuthorizationResult } from "./_AuthorizationResult";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const PutSkillAuthorizationInput: _Structure_ = {
  type: "structure",
  required: ["AuthorizationResult", "SkillId"],
  members: {
    AuthorizationResult: {
      shape: _AuthorizationResult
    },
    SkillId: {
      shape: {
        type: "string"
      }
    },
    RoomArn: {
      shape: {
        type: "string"
      }
    }
  }
};
