import { List as _List_ } from "@aws-sdk/types";
import { _Deployment } from "./_Deployment";

export const _Deployments: _List_ = {
  type: "list",
  member: {
    shape: _Deployment
  }
};
