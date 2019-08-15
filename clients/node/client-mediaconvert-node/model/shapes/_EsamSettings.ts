import { _EsamManifestConfirmConditionNotification } from "./_EsamManifestConfirmConditionNotification";
import { _EsamSignalProcessingNotification } from "./_EsamSignalProcessingNotification";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _EsamSettings: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ManifestConfirmConditionNotification: {
      shape: _EsamManifestConfirmConditionNotification,
      locationName: "manifestConfirmConditionNotification"
    },
    ResponseSignalPreroll: {
      shape: {
        type: "integer"
      },
      locationName: "responseSignalPreroll"
    },
    SignalProcessingNotification: {
      shape: _EsamSignalProcessingNotification,
      locationName: "signalProcessingNotification"
    }
  }
};
