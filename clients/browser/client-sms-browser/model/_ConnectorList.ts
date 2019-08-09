import { List as _List_ } from "@aws-sdk/types";
import { _Connector } from "./_Connector";

export const _ConnectorList: _List_ = {
  type: "list",
  member: {
    shape: _Connector
  }
};
