import { List as _List_ } from "@aws-sdk/types";
import { _DynamoDBTarget } from "./_DynamoDBTarget";

export const _DynamoDBTargetList: _List_ = {
  type: "list",
  member: {
    shape: _DynamoDBTarget
  }
};
