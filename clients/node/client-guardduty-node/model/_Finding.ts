import { _Resource } from "./_Resource";
import { _Service } from "./_Service";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Finding: _Structure_ = {
  type: "structure",
  required: [
    "AccountId",
    "Arn",
    "CreatedAt",
    "Id",
    "Region",
    "Resource",
    "SchemaVersion",
    "Severity",
    "Type",
    "UpdatedAt"
  ],
  members: {
    AccountId: {
      shape: {
        type: "string"
      },
      locationName: "accountId"
    },
    Arn: {
      shape: {
        type: "string"
      },
      locationName: "arn"
    },
    Confidence: {
      shape: {
        type: "float"
      },
      locationName: "confidence"
    },
    CreatedAt: {
      shape: {
        type: "string"
      },
      locationName: "createdAt"
    },
    Description: {
      shape: {
        type: "string"
      },
      locationName: "description"
    },
    Id: {
      shape: {
        type: "string"
      },
      locationName: "id"
    },
    Partition: {
      shape: {
        type: "string"
      },
      locationName: "partition"
    },
    Region: {
      shape: {
        type: "string"
      },
      locationName: "region"
    },
    Resource: {
      shape: _Resource,
      locationName: "resource"
    },
    SchemaVersion: {
      shape: {
        type: "string"
      },
      locationName: "schemaVersion"
    },
    Service: {
      shape: _Service,
      locationName: "service"
    },
    Severity: {
      shape: {
        type: "float"
      },
      locationName: "severity"
    },
    Title: {
      shape: {
        type: "string"
      },
      locationName: "title"
    },
    Type: {
      shape: {
        type: "string",
        min: 1
      },
      locationName: "type"
    },
    UpdatedAt: {
      shape: {
        type: "string"
      },
      locationName: "updatedAt"
    }
  }
};
