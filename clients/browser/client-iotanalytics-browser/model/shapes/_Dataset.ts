import { _DatasetActions } from "./_DatasetActions";
import { _DatasetTriggers } from "./_DatasetTriggers";
import { _DatasetContentDeliveryRules } from "./_DatasetContentDeliveryRules";
import { _RetentionPeriod } from "./_RetentionPeriod";
import { _VersioningConfiguration } from "./_VersioningConfiguration";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Dataset: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    name: {
      shape: {
        type: "string",
        min: 1
      }
    },
    arn: {
      shape: {
        type: "string"
      }
    },
    actions: {
      shape: _DatasetActions
    },
    triggers: {
      shape: _DatasetTriggers
    },
    contentDeliveryRules: {
      shape: _DatasetContentDeliveryRules
    },
    status: {
      shape: {
        type: "string"
      }
    },
    creationTime: {
      shape: {
        type: "timestamp"
      }
    },
    lastUpdateTime: {
      shape: {
        type: "timestamp"
      }
    },
    retentionPeriod: {
      shape: _RetentionPeriod
    },
    versioningConfiguration: {
      shape: _VersioningConfiguration
    }
  }
};
