import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ValidationError: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ElementPath: {
      shape: {
        type: "string"
      },
      locationName: "elementPath"
    },
    ErrorMessage: {
      shape: {
        type: "string"
      },
      locationName: "errorMessage"
    }
  }
};
