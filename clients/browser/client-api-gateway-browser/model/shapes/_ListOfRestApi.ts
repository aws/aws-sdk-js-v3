import { List as _List_ } from "@aws-sdk/types";
import { _RestApi } from "./_RestApi";

export const _ListOfRestApi: _List_ = {
  type: "list",
  member: {
    shape: _RestApi
  }
};
