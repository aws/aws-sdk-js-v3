import { _TagOptionDetails } from "./_TagOptionDetails";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListTagOptionsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    TagOptionDetails: {
      shape: _TagOptionDetails
    },
    PageToken: {
      shape: {
        type: "string"
      }
    }
  }
};
