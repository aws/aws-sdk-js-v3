import { _ResourceDetails } from "./_ResourceDetails";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListResourcesForTagOptionOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ResourceDetails: {
      shape: _ResourceDetails
    },
    PageToken: {
      shape: {
        type: "string"
      }
    }
  }
};
