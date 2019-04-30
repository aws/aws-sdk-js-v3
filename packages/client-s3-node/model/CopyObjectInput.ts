import { _Metadata } from "./_Metadata";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CopyObjectInput: _Structure_ = {
  type: "structure",
  required: ["Bucket", "CopySource", "Key"],
  members: {
    ACL: {
      shape: {
        type: "string"
      },
      location: "header",
      locationName: "x-amz-acl"
    },
    Bucket: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "Bucket"
    },
    CacheControl: {
      shape: {
        type: "string"
      },
      location: "header",
      locationName: "Cache-Control"
    },
    ContentDisposition: {
      shape: {
        type: "string"
      },
      location: "header",
      locationName: "Content-Disposition"
    },
    ContentEncoding: {
      shape: {
        type: "string"
      },
      location: "header",
      locationName: "Content-Encoding"
    },
    ContentLanguage: {
      shape: {
        type: "string"
      },
      location: "header",
      locationName: "Content-Language"
    },
    ContentType: {
      shape: {
        type: "string"
      },
      location: "header",
      locationName: "Content-Type"
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
    Expires: {
      shape: {
        type: "timestamp"
      },
      location: "header",
      locationName: "Expires"
    },
    GrantFullControl: {
      shape: {
        type: "string"
      },
      location: "header",
      locationName: "x-amz-grant-full-control"
    },
    GrantRead: {
      shape: {
        type: "string"
      },
      location: "header",
      locationName: "x-amz-grant-read"
    },
    GrantReadACP: {
      shape: {
        type: "string"
      },
      location: "header",
      locationName: "x-amz-grant-read-acp"
    },
    GrantWriteACP: {
      shape: {
        type: "string"
      },
      location: "header",
      locationName: "x-amz-grant-write-acp"
    },
    Key: {
      shape: {
        type: "string",
        min: 1
      },
      location: "uri",
      locationName: "Key"
    },
    Metadata: {
      shape: _Metadata,
      location: "headers",
      locationName: "x-amz-meta-"
    },
    MetadataDirective: {
      shape: {
        type: "string"
      },
      location: "header",
      locationName: "x-amz-metadata-directive"
    },
    TaggingDirective: {
      shape: {
        type: "string"
      },
      location: "header",
      locationName: "x-amz-tagging-directive"
    },
    ServerSideEncryption: {
      shape: {
        type: "string"
      },
      location: "header",
      locationName: "x-amz-server-side-encryption"
    },
    StorageClass: {
      shape: {
        type: "string"
      },
      location: "header",
      locationName: "x-amz-storage-class"
    },
    WebsiteRedirectLocation: {
      shape: {
        type: "string"
      },
      location: "header",
      locationName: "x-amz-website-redirect-location"
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
    SSEKMSKeyId: {
      shape: {
        type: "string",
        sensitive: true
      },
      location: "header",
      locationName: "x-amz-server-side-encryption-aws-kms-key-id"
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
    },
    Tagging: {
      shape: {
        type: "string"
      },
      location: "header",
      locationName: "x-amz-tagging"
    }
  }
};
