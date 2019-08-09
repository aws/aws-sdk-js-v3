import { List as _List_ } from "@aws-sdk/types";
import { _S3Tag } from "./_S3Tag";

export const _S3TagSet: _List_ = {
  type: "list",
  member: {
    shape: _S3Tag
  }
};
