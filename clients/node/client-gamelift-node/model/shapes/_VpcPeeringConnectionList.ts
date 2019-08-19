import { List as _List_ } from "@aws-sdk/types";
import { _VpcPeeringConnection } from "./_VpcPeeringConnection";

export const _VpcPeeringConnectionList: _List_ = {
  type: "list",
  member: {
    shape: _VpcPeeringConnection
  }
};
