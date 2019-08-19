import { List as _List_ } from "@aws-sdk/types";
import { _ScheduledInstancesBlockDeviceMapping } from "./_ScheduledInstancesBlockDeviceMapping";

export const _ScheduledInstancesBlockDeviceMappingSet: _List_ = {
  type: "list",
  member: {
    shape: _ScheduledInstancesBlockDeviceMapping,
    locationName: "BlockDeviceMapping"
  }
};
