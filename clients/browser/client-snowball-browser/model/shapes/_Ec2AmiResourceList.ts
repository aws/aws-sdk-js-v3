import { List as _List_ } from "@aws-sdk/types";
import { _Ec2AmiResource } from "./_Ec2AmiResource";

export const _Ec2AmiResourceList: _List_ = {
  type: "list",
  member: {
    shape: _Ec2AmiResource
  }
};
