import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteUsagePlanInput: _Structure_ = {
  type: "structure",
  required: ["usagePlanId"],
  members: {
    usagePlanId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "usageplanId"
    }
  }
};
