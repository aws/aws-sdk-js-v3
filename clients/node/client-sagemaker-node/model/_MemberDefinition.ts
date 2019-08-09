import { _CognitoMemberDefinition } from "./_CognitoMemberDefinition";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _MemberDefinition: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    CognitoMemberDefinition: {
      shape: _CognitoMemberDefinition
    }
  }
};
