import { _VolumeStatusDetailsList } from "./_VolumeStatusDetailsList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _VolumeStatusInfo: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Details: {
      shape: _VolumeStatusDetailsList,
      locationName: "details"
    },
    Status: {
      shape: {
        type: "string"
      },
      locationName: "status"
    }
  }
};
