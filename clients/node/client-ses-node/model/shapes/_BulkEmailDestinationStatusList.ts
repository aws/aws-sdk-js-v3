import { List as _List_ } from "@aws-sdk/types";
import { _BulkEmailDestinationStatus } from "./_BulkEmailDestinationStatus";

export const _BulkEmailDestinationStatusList: _List_ = {
  type: "list",
  member: {
    shape: _BulkEmailDestinationStatus
  }
};
