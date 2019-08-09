import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeRestoreJobInput: _Structure_ = {
  type: "structure",
  required: ["RestoreJobId"],
  members: {
    RestoreJobId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "restoreJobId"
    }
  }
};
