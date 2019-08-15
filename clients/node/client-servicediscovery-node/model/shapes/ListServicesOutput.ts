import { _ServiceSummariesList } from "./_ServiceSummariesList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListServicesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Services: {
      shape: _ServiceSummariesList
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
