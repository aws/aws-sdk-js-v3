import { List as _List_ } from "@aws-sdk/types";
import { _VolumeStatusDetails } from "./_VolumeStatusDetails";

export const _VolumeStatusDetailsList: _List_ = {
  type: "list",
  member: {
    shape: _VolumeStatusDetails,
    locationName: "item"
  }
};
