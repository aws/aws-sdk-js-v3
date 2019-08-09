import { _TrackingOptions } from "./_TrackingOptions";
import { _DeliveryOptions } from "./_DeliveryOptions";
import { _ReputationOptions } from "./_ReputationOptions";
import { _SendingOptions } from "./_SendingOptions";
import { _TagList } from "./_TagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetConfigurationSetOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ConfigurationSetName: {
      shape: {
        type: "string"
      }
    },
    TrackingOptions: {
      shape: _TrackingOptions
    },
    DeliveryOptions: {
      shape: _DeliveryOptions
    },
    ReputationOptions: {
      shape: _ReputationOptions
    },
    SendingOptions: {
      shape: _SendingOptions
    },
    Tags: {
      shape: _TagList
    }
  }
};
