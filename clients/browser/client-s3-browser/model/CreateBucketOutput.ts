import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateBucketOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Location: {
      shape: {
        type: "string"
      },
      location: "header",
      locationName: "Location"
    }
  }
};
