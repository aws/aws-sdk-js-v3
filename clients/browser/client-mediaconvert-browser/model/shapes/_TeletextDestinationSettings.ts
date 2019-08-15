import { Structure as _Structure_ } from "@aws-sdk/types";

export const _TeletextDestinationSettings: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    PageNumber: {
      shape: {
        type: "string",
        min: 3
      },
      locationName: "pageNumber"
    }
  }
};
