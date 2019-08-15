import { List as _List_ } from "@aws-sdk/types";
import { _AwsSecurityFinding } from "./_AwsSecurityFinding";

export const _AwsSecurityFindingList: _List_ = {
  type: "list",
  member: {
    shape: _AwsSecurityFinding
  }
};
