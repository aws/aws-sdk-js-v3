import { _TagList } from "./_TagList";
import { _DefinitionDocument } from "./_DefinitionDocument";
import { _MetricsConfiguration } from "./_MetricsConfiguration";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateSystemInstanceInput: _Structure_ = {
  type: "structure",
  required: ["definition", "target"],
  members: {
    tags: {
      shape: _TagList
    },
    definition: {
      shape: _DefinitionDocument
    },
    target: {
      shape: {
        type: "string"
      }
    },
    greengrassGroupName: {
      shape: {
        type: "string"
      }
    },
    s3BucketName: {
      shape: {
        type: "string"
      }
    },
    metricsConfiguration: {
      shape: _MetricsConfiguration
    },
    flowActionsRoleArn: {
      shape: {
        type: "string",
        min: 20
      }
    }
  }
};
