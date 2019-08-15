import { ___listOf__string } from "./___listOf__string";
import { _ConfigurationRevision } from "./_ConfigurationRevision";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeConfigurationOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Arn: {
      shape: {
        type: "string"
      },
      locationName: "arn"
    },
    CreationTime: {
      shape: {
        type: "timestamp",
        timestampFormat: "iso8601"
      },
      locationName: "creationTime"
    },
    Description: {
      shape: {
        type: "string"
      },
      locationName: "description"
    },
    KafkaVersions: {
      shape: ___listOf__string,
      locationName: "kafkaVersions"
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
    }
  }
};
