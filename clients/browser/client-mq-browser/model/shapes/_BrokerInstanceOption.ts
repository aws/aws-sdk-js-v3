import { ___listOfAvailabilityZone } from "./___listOfAvailabilityZone";
import { ___listOf__string } from "./___listOf__string";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _BrokerInstanceOption: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AvailabilityZones: {
      shape: ___listOfAvailabilityZone,
      locationName: "availabilityZones"
    },
    EngineType: {
      shape: {
        type: "string"
      },
      locationName: "engineType"
    },
    HostInstanceType: {
      shape: {
        type: "string"
      },
      locationName: "hostInstanceType"
    },
    SupportedEngineVersions: {
      shape: ___listOf__string,
      locationName: "supportedEngineVersions"
    }
  }
};
