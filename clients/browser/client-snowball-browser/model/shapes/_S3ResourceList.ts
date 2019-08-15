import { List as _List_ } from "@aws-sdk/types";
import { _S3Resource } from "./_S3Resource";

export const _S3ResourceList: _List_ = {
  type: "list",
  member: {
    shape: _S3Resource
  }
};
