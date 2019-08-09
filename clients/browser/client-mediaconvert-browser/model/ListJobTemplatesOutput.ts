import { ___listOfJobTemplate } from "./___listOfJobTemplate";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListJobTemplatesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    JobTemplates: {
      shape: ___listOfJobTemplate,
      locationName: "jobTemplates"
    },
    NextToken: {
      shape: {
        type: "string"
      },
      locationName: "nextToken"
    }
  }
};
