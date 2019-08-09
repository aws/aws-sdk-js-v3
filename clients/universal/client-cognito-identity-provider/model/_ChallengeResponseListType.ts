import { List as _List_ } from "@aws-sdk/types";
import { _ChallengeResponseType } from "./_ChallengeResponseType";

export const _ChallengeResponseListType: _List_ = {
  type: "list",
  member: {
    shape: _ChallengeResponseType
  }
};
