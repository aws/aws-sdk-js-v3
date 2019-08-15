import { _DatasetActions } from "./_DatasetActions";
import { _DatasetTriggers } from "./_DatasetTriggers";
import { _DatasetContentDeliveryRules } from "./_DatasetContentDeliveryRules";
import { _RetentionPeriod } from "./_RetentionPeriod";
import { _VersioningConfiguration } from "./_VersioningConfiguration";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateDatasetInput: _Structure_ = {
  type: "structure",
  required: ["datasetName", "actions"],
  members: {
    datasetName: {
      shape: {
        type: "string",
        min: 1
      },
      location: "uri",
      locationName: "datasetName"
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
    }
  }
};
