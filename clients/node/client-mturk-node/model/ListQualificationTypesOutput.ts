import { _QualificationTypeList } from "./_QualificationTypeList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListQualificationTypesOutput: _Structure_ = {
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
    QualificationTypes: {
      shape: _QualificationTypeList
    }
  }
};
