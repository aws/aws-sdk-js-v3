import { _UserActivities } from "./_UserActivities";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeActivitiesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    UserActivities: {
      shape: _UserActivities
    },
    Marker: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
