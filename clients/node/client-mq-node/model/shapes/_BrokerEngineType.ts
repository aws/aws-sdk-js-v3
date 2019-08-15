import { ___listOfEngineVersion } from "./___listOfEngineVersion";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _BrokerEngineType: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    EngineType: {
      shape: {
        type: "string"
      },
      locationName: "engineType"
    },
    EngineVersions: {
      shape: ___listOfEngineVersion,
      locationName: "engineVersions"
    }
  }
};
