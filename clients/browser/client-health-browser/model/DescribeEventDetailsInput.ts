import { _eventArnList } from "./_eventArnList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeEventDetailsInput: _Structure_ = {
  type: "structure",
  required: ["eventArns"],
  members: {
    eventArns: {
      shape: _eventArnList
    },
    locale: {
      shape: {
        type: "string",
        min: 2
      }
    }
  }
};
