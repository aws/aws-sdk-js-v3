import { List as _List_ } from "@aws-sdk/types";
import { _StorageConnector } from "./_StorageConnector";

export const _StorageConnectorList: _List_ = {
  type: "list",
  member: {
    shape: _StorageConnector
  }
};
