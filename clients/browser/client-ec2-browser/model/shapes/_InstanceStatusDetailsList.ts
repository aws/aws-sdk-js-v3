import { List as _List_ } from "@aws-sdk/types";
import { _InstanceStatusDetails } from "./_InstanceStatusDetails";

export const _InstanceStatusDetailsList: _List_ = {
  type: "list",
  member: {
    shape: _InstanceStatusDetails,
    locationName: "item"
  }
};
