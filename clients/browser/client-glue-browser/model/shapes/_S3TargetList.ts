import { List as _List_ } from "@aws-sdk/types";
import { _S3Target } from "./_S3Target";

export const _S3TargetList: _List_ = {
  type: "list",
  member: {
    shape: _S3Target
  }
};
