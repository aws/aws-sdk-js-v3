import { _CompletedMultipartUpload } from "./_CompletedMultipartUpload";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CompleteMultipartUploadInput: _Structure_ = {
  type: "structure",
  required: ["Bucket", "Key", "UploadId"],
  members: {
    Bucket: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "Bucket"
    },
    Key: {
      shape: {
        type: "string",
        min: 1
      },
      location: "uri",
      locationName: "Key"
    },
    MultipartUpload: {
      shape: _CompletedMultipartUpload,
      locationName: "CompleteMultipartUpload",
      xmlNamespace: {
        uri: "http://s3.amazonaws.com/doc/2006-03-01/"
      }
    },
    UploadId: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "uploadId"
    },
    RequestPayer: {
      shape: {
        type: "string"
      },
      location: "header",
      locationName: "x-amz-request-payer"
    }
  },
  payload: "MultipartUpload"
};
