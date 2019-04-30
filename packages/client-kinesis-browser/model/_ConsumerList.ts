import { List as _List_ } from "@aws-sdk/types";
import { _Consumer } from "./_Consumer";

export const _ConsumerList: _List_ = {
  type: "list",
  member: {
    shape: _Consumer
  }
};
