import { List as _List_ } from "@aws-sdk/types";
import { _S3ResourceClassificationUpdate } from "./_S3ResourceClassificationUpdate";

export const _S3ResourcesClassificationUpdate: _List_ = {
  type: "list",
  member: {
    shape: _S3ResourceClassificationUpdate
  }
};
