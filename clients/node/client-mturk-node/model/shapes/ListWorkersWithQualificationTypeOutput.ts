import { _QualificationList } from "./_QualificationList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListWorkersWithQualificationTypeOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    NextToken: {
      shape: {
        type: "string",
        min: 1
      }
    },
    NumResults: {
      shape: {
        type: "integer"
      }
    },
    Qualifications: {
      shape: _QualificationList
    }
  }
};
