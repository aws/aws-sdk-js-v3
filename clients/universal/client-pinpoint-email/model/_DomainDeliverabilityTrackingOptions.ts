import { List as _List_ } from "@aws-sdk/types";
import { _DomainDeliverabilityTrackingOption } from "./_DomainDeliverabilityTrackingOption";

export const _DomainDeliverabilityTrackingOptions: _List_ = {
  type: "list",
  member: {
    shape: _DomainDeliverabilityTrackingOption
  }
};
