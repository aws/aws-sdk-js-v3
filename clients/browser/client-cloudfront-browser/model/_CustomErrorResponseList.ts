import { List as _List_ } from "@aws-sdk/types";
import { _CustomErrorResponse } from "./_CustomErrorResponse";

export const _CustomErrorResponseList: _List_ = {
  type: "list",
  member: {
    shape: _CustomErrorResponse,
    locationName: "CustomErrorResponse"
  }
};
