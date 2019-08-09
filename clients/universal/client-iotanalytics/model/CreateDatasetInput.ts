import { _DatasetActions } from "./_DatasetActions";
import { _DatasetTriggers } from "./_DatasetTriggers";
import { _DatasetContentDeliveryRules } from "./_DatasetContentDeliveryRules";
import { _RetentionPeriod } from "./_RetentionPeriod";
import { _VersioningConfiguration } from "./_VersioningConfiguration";
import { _TagList } from "./_TagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateDatasetInput: _Structure_ = {
  type: "structure",
  required: ["datasetName", "actions"],
  members: {
    datasetName: {
      shape: {
        type: "string",
        min: 1
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
    retentionPeriod: {
      shape: _RetentionPeriod
    },
    versioningConfiguration: {
      shape: _VersioningConfiguration
    },
    tags: {
      shape: _TagList
    }
  }
};
