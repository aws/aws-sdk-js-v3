import { Structure as _Structure_ } from "@aws-sdk/types";

export const AbortMultipartUploadOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    RequestCharged: {
      shape: {
        type: "string"
      },
      location: "header",
      locationName: "x-amz-request-charged"
    }
  }
};
