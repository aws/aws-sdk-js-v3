import { _GlueConfiguration } from "./_GlueConfiguration";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _S3DestinationConfiguration: _Structure_ = {
  type: "structure",
  required: ["bucket", "key", "roleArn"],
  members: {
    bucket: {
      shape: {
        type: "string",
        min: 3
      }
    },
    key: {
      shape: {
        type: "string",
        min: 1
      }
    },
    glueConfiguration: {
      shape: _GlueConfiguration
    },
    roleArn: {
      shape: {
        type: "string",
        min: 20
      }
    }
  }
};
