import { _BusinessReportS3Location } from "./_BusinessReportS3Location";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _BusinessReport: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Status: {
      shape: {
        type: "string"
      }
    },
    FailureCode: {
      shape: {
        type: "string"
      }
    },
    S3Location: {
      shape: _BusinessReportS3Location
    },
    DeliveryTime: {
      shape: {
        type: "timestamp"
      }
    },
    DownloadUrl: {
      shape: {
        type: "string"
      }
    }
  }
};
