import { List as _List_ } from "@aws-sdk/types";
import { _AccessDetail } from "./_AccessDetail";

export const _AccessDetails: _List_ = {
  type: "list",
  member: {
    shape: _AccessDetail
  }
};
