import { List as _List_ } from "@aws-sdk/types";
import { _PortProbeDetail } from "./_PortProbeDetail";

export const _PortProbeDetails: _List_ = {
  type: "list",
  member: {
    shape: _PortProbeDetail
  }
};
