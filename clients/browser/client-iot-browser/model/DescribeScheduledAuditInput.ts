import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeScheduledAuditInput: _Structure_ = {
  type: "structure",
  required: ["scheduledAuditName"],
  members: {
    scheduledAuditName: {
      shape: {
        type: "string",
        min: 1
      },
      location: "uri",
      locationName: "scheduledAuditName"
    }
  }
};
