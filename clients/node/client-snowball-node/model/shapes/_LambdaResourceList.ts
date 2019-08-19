import { List as _List_ } from "@aws-sdk/types";
import { _LambdaResource } from "./_LambdaResource";

export const _LambdaResourceList: _List_ = {
  type: "list",
  member: {
    shape: _LambdaResource
  }
};
