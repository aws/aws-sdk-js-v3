import { List as _List_ } from "@aws-sdk/types";
import { _VpcPeeringAuthorization } from "./_VpcPeeringAuthorization";

export const _VpcPeeringAuthorizationList: _List_ = {
  type: "list",
  member: {
    shape: _VpcPeeringAuthorization
  }
};
