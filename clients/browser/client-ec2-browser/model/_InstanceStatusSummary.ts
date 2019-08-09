import { _InstanceStatusDetailsList } from "./_InstanceStatusDetailsList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _InstanceStatusSummary: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Details: {
      shape: _InstanceStatusDetailsList,
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
