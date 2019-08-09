import { _Metadata } from "./_Metadata";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const HeadObjectOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    DeleteMarker: {
      shape: {
        type: "boolean"
      },
      location: "header",
      locationName: "x-amz-delete-marker"
    },
    AcceptRanges: {
      shape: {
        type: "string"
      },
      location: "header",
      locationName: "accept-ranges"
    },
    Expiration: {
      shape: {
        type: "string"
      },
      location: "header",
      locationName: "x-amz-expiration"
    },
    Restore: {
      shape: {
        type: "string"
      },
      location: "header",
      locationName: "x-amz-restore"
    },
    LastModified: {
      shape: {
        type: "timestamp"
      },
      location: "header",
      locationName: "Last-Modified"
    },
    ContentLength: {
      shape: {
        type: "integer"
      },
      location: "header",
      locationName: "Content-Length"
    },
    ETag: {
      shape: {
        type: "string"
      },
      location: "header",
      locationName: "ETag"
    },
    MissingMeta: {
      shape: {
        type: "integer"
      },
      location: "header",
      locationName: "x-amz-missing-meta"
    },
    VersionId: {
      shape: {
        type: "string"
      },
      location: "header",
      locationName: "x-amz-version-id"
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
    Expires: {
      shape: {
        type: "timestamp"
      },
      location: "header",
      locationName: "Expires"
    },
    WebsiteRedirectLocation: {
      shape: {
        type: "string"
      },
      location: "header",
      locationName: "x-amz-website-redirect-location"
    },
    ServerSideEncryption: {
      shape: {
        type: "string"
      },
      location: "header",
      locationName: "x-amz-server-side-encryption"
    },
    Metadata: {
      shape: _Metadata,
      location: "headers",
      locationName: "x-amz-meta-"
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
    StorageClass: {
      shape: {
        type: "string"
      },
      location: "header",
      locationName: "x-amz-storage-class"
    },
    RequestCharged: {
      shape: {
        type: "string"
      },
      location: "header",
      locationName: "x-amz-request-charged"
    },
    ReplicationStatus: {
      shape: {
        type: "string"
      },
      location: "header",
      locationName: "x-amz-replication-status"
    },
    PartsCount: {
      shape: {
        type: "integer"
      },
      location: "header",
      locationName: "x-amz-mp-parts-count"
    },
    ObjectLockMode: {
      shape: {
        type: "string"
      },
      location: "header",
      locationName: "x-amz-object-lock-mode"
    },
    ObjectLockRetainUntilDate: {
      shape: {
        type: "timestamp",
        timestampFormat: "iso8601"
      },
      location: "header",
      locationName: "x-amz-object-lock-retain-until-date"
    },
    ObjectLockLegalHoldStatus: {
      shape: {
        type: "string"
      },
      location: "header",
      locationName: "x-amz-object-lock-legal-hold"
    }
  }
};
