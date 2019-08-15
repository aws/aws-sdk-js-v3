import { List as _List_ } from "@aws-sdk/types";
import { _ClassicLinkDnsSupport } from "./_ClassicLinkDnsSupport";

export const _ClassicLinkDnsSupportList: _List_ = {
  type: "list",
  member: {
    shape: _ClassicLinkDnsSupport,
    locationName: "item"
  }
};
