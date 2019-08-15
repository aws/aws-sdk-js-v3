import { _ApplicationDescriptionList } from "./_ApplicationDescriptionList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeApplicationsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Applications: {
      shape: _ApplicationDescriptionList
    }
  }
};
