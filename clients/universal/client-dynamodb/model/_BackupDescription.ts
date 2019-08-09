import { _BackupDetails } from "./_BackupDetails";
import { _SourceTableDetails } from "./_SourceTableDetails";
import { _SourceTableFeatureDetails } from "./_SourceTableFeatureDetails";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _BackupDescription: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    BackupDetails: {
      shape: _BackupDetails
    },
    SourceTableDetails: {
      shape: _SourceTableDetails
    },
    SourceTableFeatureDetails: {
      shape: _SourceTableFeatureDetails
    }
  }
};
