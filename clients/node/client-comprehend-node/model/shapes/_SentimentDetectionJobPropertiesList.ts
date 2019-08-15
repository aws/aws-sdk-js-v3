import { List as _List_ } from "@aws-sdk/types";
import { _SentimentDetectionJobProperties } from "./_SentimentDetectionJobProperties";

export const _SentimentDetectionJobPropertiesList: _List_ = {
  type: "list",
  member: {
    shape: _SentimentDetectionJobProperties
  }
};
