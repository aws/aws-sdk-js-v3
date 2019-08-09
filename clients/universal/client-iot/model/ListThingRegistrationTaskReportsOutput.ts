import { _S3FileUrlList } from "./_S3FileUrlList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListThingRegistrationTaskReportsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    resourceLinks: {
      shape: _S3FileUrlList
    },
    reportType: {
      shape: {
        type: "string"
      }
    },
    nextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
