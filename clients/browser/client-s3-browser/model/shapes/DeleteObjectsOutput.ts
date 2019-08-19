import { _DeletedObjects } from "./_DeletedObjects";
import { _Errors } from "./_Errors";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteObjectsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Deleted: {
      shape: _DeletedObjects
    },
    RequestCharged: {
      shape: {
        type: "string"
      },
      location: "header",
      locationName: "x-amz-request-charged"
    },
    Errors: {
      shape: _Errors,
      locationName: "Error"
    }
  }
};
