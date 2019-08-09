import { _SchemaElementList } from "./_SchemaElementList";
import { _AdditionalArtifactList } from "./_AdditionalArtifactList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ReportDefinition: _Structure_ = {
  type: "structure",
  required: [
    "ReportName",
    "TimeUnit",
    "Format",
    "Compression",
    "AdditionalSchemaElements",
    "S3Bucket",
    "S3Prefix",
    "S3Region"
  ],
  members: {
    ReportName: {
      shape: {
        type: "string"
      }
    },
    TimeUnit: {
      shape: {
        type: "string"
      }
    },
    Format: {
      shape: {
        type: "string"
      }
    },
    Compression: {
      shape: {
        type: "string"
      }
    },
    AdditionalSchemaElements: {
      shape: _SchemaElementList
    },
    S3Bucket: {
      shape: {
        type: "string"
      }
    },
    S3Prefix: {
      shape: {
        type: "string"
      }
    },
    S3Region: {
      shape: {
        type: "string"
      }
    },
    AdditionalArtifacts: {
      shape: _AdditionalArtifactList
    },
    RefreshClosedReports: {
      shape: {
        type: "boolean"
      }
    },
    ReportVersioning: {
      shape: {
        type: "string"
      }
    }
  }
};
