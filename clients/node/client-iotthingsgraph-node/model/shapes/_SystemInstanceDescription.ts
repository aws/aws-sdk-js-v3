import { _SystemInstanceSummary } from "./_SystemInstanceSummary";
import { _DefinitionDocument } from "./_DefinitionDocument";
import { _MetricsConfiguration } from "./_MetricsConfiguration";
import { _DependencyRevisions } from "./_DependencyRevisions";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _SystemInstanceDescription: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    summary: {
      shape: _SystemInstanceSummary
    },
    definition: {
      shape: _DefinitionDocument
    },
    s3BucketName: {
      shape: {
        type: "string"
      }
    },
    metricsConfiguration: {
      shape: _MetricsConfiguration
    },
    validatedNamespaceVersion: {
      shape: {
        type: "integer"
      }
    },
    validatedDependencyRevisions: {
      shape: _DependencyRevisions
    },
    flowActionsRoleArn: {
      shape: {
        type: "string",
        min: 20
      }
    }
  }
};
