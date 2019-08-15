import { List as _List_ } from "@aws-sdk/types";
import { _AssessmentRunNotification } from "./_AssessmentRunNotification";

export const _AssessmentRunNotificationList: _List_ = {
  type: "list",
  member: {
    shape: _AssessmentRunNotification
  }
};
