import { List as _List_ } from "@aws-sdk/types";
import { _GroupNameAndArn } from "./_GroupNameAndArn";

export const _ThingGroupNameAndArnList: _List_ = {
  type: "list",
  member: {
    shape: _GroupNameAndArn
  }
};
