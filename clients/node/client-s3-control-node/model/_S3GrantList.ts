import { List as _List_ } from "@aws-sdk/types";
import { _S3Grant } from "./_S3Grant";

export const _S3GrantList: _List_ = {
  type: "list",
  member: {
    shape: _S3Grant
  }
};
