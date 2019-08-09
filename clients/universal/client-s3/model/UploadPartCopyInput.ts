import { Structure as _Structure_ } from "@aws-sdk/types";

export const UploadPartCopyInput: _Structure_ = {
  type: "structure",
  required: ["Bucket", "CopySource", "Key", "PartNumber", "UploadId"],
  members: {
    Bucket: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "Bucket"
    },
    CopySource: {
      shape: {
        type: "string"
      },
      location: "header",
      locationName: "x-amz-copy-source"
    },
    CopySourceIfMatch: {
      shape: {
        type: "string"
      },
      location: "header",
      locationName: "x-amz-copy-source-if-match"
    },
    CopySourceIfModifiedSince: {
      shape: {
        type: "timestamp"
      },
      location: "header",
      locationName: "x-amz-copy-source-if-modified-since"
    },
    CopySourceIfNoneMatch: {
      shape: {
        type: "string"
      },
      location: "header",
      locationName: "x-amz-copy-source-if-none-match"
    },
    CopySourceIfUnmodifiedSince: {
      shape: {
        type: "timestamp"
      },
      location: "header",
      locationName: "x-amz-copy-source-if-unmodified-since"
    },
    CopySourceRange: {
      shape: {
        type: "string"
      },
      location: "header",
      locationName: "x-amz-copy-source-range"
    },
    Key: {
      shape: {
        type: "string",
        min: 1
      },
      location: "uri",
      locationName: "Key"
    },
    PartNumber: {
      shape: {
        type: "integer"
      },
      location: "querystring",
      locationName: "partNumber"
    },
    UploadId: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "uploadId"
    },
    SSECustomerAlgorithm: {
      shape: {
        type: "string"
      },
      location: "header",
      locationName: "x-amz-server-side-encryption-customer-algorithm"
    },
    SSECustomerKey: {
      shape: {
        type: "string",
        sensitive: true
      },
      location: "header",
      locationName: "x-amz-server-side-encryption-customer-key"
    },
    SSECustomerKeyMD5: {
      shape: {
        type: "string"
      },
      location: "header",
      locationName: "x-amz-server-side-encryption-customer-key-MD5"
    },
    CopySourceSSECustomerAlgorithm: {
      shape: {
        type: "string"
      },
      location: "header",
      locationName:
        "x-amz-copy-source-server-side-encryption-customer-algorithm"
    },
    CopySourceSSECustomerKey: {
      shape: {
        type: "string",
        sensitive: true
      },
      location: "header",
      locationName: "x-amz-copy-source-server-side-encryption-customer-key"
    },
    CopySourceSSECustomerKeyMD5: {
      shape: {
        type: "string"
      },
      location: "header",
      locationName: "x-amz-copy-source-server-side-encryption-customer-key-MD5"
    },
    RequestPayer: {
      shape: {
        type: "string"
      },
      location: "header",
      locationName: "x-amz-request-payer"
    }
  }
};
