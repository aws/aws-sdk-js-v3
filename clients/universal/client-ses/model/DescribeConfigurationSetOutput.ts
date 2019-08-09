import { _ConfigurationSet } from "./_ConfigurationSet";
import { _EventDestinations } from "./_EventDestinations";
import { _TrackingOptions } from "./_TrackingOptions";
import { _DeliveryOptions } from "./_DeliveryOptions";
import { _ReputationOptions } from "./_ReputationOptions";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeConfigurationSetOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ConfigurationSet: {
      shape: _ConfigurationSet
    },
    EventDestinations: {
      shape: _EventDestinations
    },
    TrackingOptions: {
      shape: _TrackingOptions
    },
    DeliveryOptions: {
      shape: _DeliveryOptions
    },
    ReputationOptions: {
      shape: _ReputationOptions
    }
  }
};
