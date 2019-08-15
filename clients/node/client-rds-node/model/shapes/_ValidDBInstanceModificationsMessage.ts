import { _ValidStorageOptionsList } from "./_ValidStorageOptionsList";
import { _AvailableProcessorFeatureList } from "./_AvailableProcessorFeatureList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ValidDBInstanceModificationsMessage: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Storage: {
      shape: _ValidStorageOptionsList
    },
    ValidProcessorFeatures: {
      shape: _AvailableProcessorFeatureList
    }
  }
};
