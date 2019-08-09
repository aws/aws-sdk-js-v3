import { List as _List_ } from "@aws-sdk/types";
import { _ApplicationResponse } from "./_ApplicationResponse";

export const _ListOfApplicationResponse: _List_ = {
  type: "list",
  member: {
    shape: _ApplicationResponse
  }
};
