import { Structure as _Structure_ } from "@aws-sdk/types";

export const PutObjectOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Expiration: {
      shape: {
        type: "string"
      },
      location: "header",
      locationName: "x-amz-expiration"
    },
    ETag: {
      shape: {
        type: "string"
      },
      location: "header",
      locationName: "ETag"
    },
    ServerSideEncryption: {
      shape: {
        type: "string"
      },
      location: "header",
      locationName: "x-amz-server-side-encryption"
    },
    VersionId: {
      shape: {
        type: "string"
      },
      location: "header",
      locationName: "x-amz-version-id"
    },
    SSECustomerAlgorithm: {
      shape: {
        type: "string"
      },
      location: "header",
      locationName: "x-amz-server-side-encryption-customer-algorithm"
    },
    SSECustomerKeyMD5: {
      shape: {
        type: "string"
      },
      location: "header",
      locationName: "x-amz-server-side-encryption-customer-key-MD5"
    },
    SSEKMSKeyId: {
      shape: {
        type: "string",
        sensitive: true
      },
      location: "header",
      locationName: "x-amz-server-side-encryption-aws-kms-key-id"
    },
    RequestCharged: {
      shape: {
        type: "string"
      },
      location: "header",
      locationName: "x-amz-request-charged"
    }
  }
};
