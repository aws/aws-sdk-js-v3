import { _ApplicationVersionDescriptionList } from "./_ApplicationVersionDescriptionList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeApplicationVersionsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ApplicationVersions: {
      shape: _ApplicationVersionDescriptionList
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
