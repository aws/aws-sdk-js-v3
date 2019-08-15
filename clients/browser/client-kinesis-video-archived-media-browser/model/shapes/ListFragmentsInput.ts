import { _FragmentSelector } from "./_FragmentSelector";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListFragmentsInput: _Structure_ = {
  type: "structure",
  required: ["StreamName"],
  members: {
    StreamName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    MaxResults: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    NextToken: {
      shape: {
        type: "string",
        min: 1
      }
    },
    FragmentSelector: {
      shape: _FragmentSelector
    }
  }
};
