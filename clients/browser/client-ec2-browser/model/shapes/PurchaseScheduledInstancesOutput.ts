import { _PurchasedScheduledInstanceSet } from "./_PurchasedScheduledInstanceSet";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const PurchaseScheduledInstancesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ScheduledInstanceSet: {
      shape: _PurchasedScheduledInstanceSet,
      locationName: "scheduledInstanceSet"
    }
  }
};
