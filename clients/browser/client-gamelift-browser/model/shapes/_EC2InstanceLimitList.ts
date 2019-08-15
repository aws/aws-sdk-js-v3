import { List as _List_ } from "@aws-sdk/types";
import { _EC2InstanceLimit } from "./_EC2InstanceLimit";

export const _EC2InstanceLimitList: _List_ = {
  type: "list",
  member: {
    shape: _EC2InstanceLimit
  }
};
