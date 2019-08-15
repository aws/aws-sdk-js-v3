import { _ApplicationNamesList } from "./_ApplicationNamesList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeApplicationsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ApplicationNames: {
      shape: _ApplicationNamesList
    }
  }
};
