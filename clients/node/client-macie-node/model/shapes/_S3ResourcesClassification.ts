import { List as _List_ } from "@aws-sdk/types";
import { _S3ResourceClassification } from "./_S3ResourceClassification";

export const _S3ResourcesClassification: _List_ = {
  type: "list",
  member: {
    shape: _S3ResourceClassification
  }
};
