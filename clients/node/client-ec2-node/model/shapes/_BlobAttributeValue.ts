import { Structure as _Structure_ } from "@aws-sdk/types";

export const _BlobAttributeValue: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Value: {
      shape: {
        type: "blob"
      },
      locationName: "value"
    }
  }
};
