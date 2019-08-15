import { List as _List_ } from "@aws-sdk/types";
import { _FailedS3Resource } from "./_FailedS3Resource";

export const _FailedS3Resources: _List_ = {
  type: "list",
  member: {
    shape: _FailedS3Resource
  }
};
