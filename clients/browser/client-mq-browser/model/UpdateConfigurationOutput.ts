import { _ConfigurationRevision } from "./_ConfigurationRevision";
import { ___listOfSanitizationWarning } from "./___listOfSanitizationWarning";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateConfigurationOutput: _Structure_ = {
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
    Warnings: {
      shape: ___listOfSanitizationWarning,
      locationName: "warnings"
    }
  }
};
