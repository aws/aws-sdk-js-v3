import { _ConfigurationRevision } from "./_ConfigurationRevision";
import { ___mapOf__string } from "./___mapOf__string";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Configuration: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Arn: {
      shape: {
        type: "string"
      },
      locationName: "arn"
    },
    Created: {
      shape: {
        type: "timestamp",
        timestampFormat: "iso8601"
      },
      locationName: "created"
    },
    Description: {
      shape: {
        type: "string"
      },
      locationName: "description"
    },
    EngineType: {
      shape: {
        type: "string"
      },
      locationName: "engineType"
    },
    EngineVersion: {
      shape: {
        type: "string"
      },
      locationName: "engineVersion"
    },
    Id: {
      shape: {
        type: "string"
      },
      locationName: "id"
    },
    LatestRevision: {
      shape: _ConfigurationRevision,
      locationName: "latestRevision"
    },
    Name: {
      shape: {
        type: "string"
      },
      locationName: "name"
    },
    Tags: {
      shape: ___mapOf__string,
      locationName: "tags"
    }
  }
};
