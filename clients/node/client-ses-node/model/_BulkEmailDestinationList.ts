import { List as _List_ } from "@aws-sdk/types";
import { _BulkEmailDestination } from "./_BulkEmailDestination";

export const _BulkEmailDestinationList: _List_ = {
  type: "list",
  member: {
    shape: _BulkEmailDestination
  }
};
