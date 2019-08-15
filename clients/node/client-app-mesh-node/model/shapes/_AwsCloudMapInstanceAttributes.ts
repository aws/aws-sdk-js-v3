import { List as _List_ } from "@aws-sdk/types";
import { _AwsCloudMapInstanceAttribute } from "./_AwsCloudMapInstanceAttribute";

export const _AwsCloudMapInstanceAttributes: _List_ = {
  type: "list",
  member: {
    shape: _AwsCloudMapInstanceAttribute
  }
};
