import { _QualificationRequestList } from "./_QualificationRequestList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListQualificationRequestsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    NumResults: {
      shape: {
        type: "integer"
      }
    },
    NextToken: {
      shape: {
        type: "string",
        min: 1
      }
    },
    QualificationRequests: {
      shape: _QualificationRequestList
    }
  }
};
