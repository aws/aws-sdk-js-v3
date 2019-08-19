import { List as _List_ } from "@aws-sdk/types";
import { _Communication } from "./_Communication";

export const _CommunicationList: _List_ = {
  type: "list",
  member: {
    shape: _Communication
  }
};
