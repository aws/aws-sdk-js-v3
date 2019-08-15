import { _ConfigurationId } from "./_ConfigurationId";
import { _Logs } from "./_Logs";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateBrokerInput: _Structure_ = {
  type: "structure",
  required: ["BrokerId"],
  members: {
    AutoMinorVersionUpgrade: {
      shape: {
        type: "boolean"
      },
      locationName: "autoMinorVersionUpgrade"
    },
    BrokerId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "broker-id"
    },
    Configuration: {
      shape: _ConfigurationId,
      locationName: "configuration"
    },
    EngineVersion: {
      shape: {
        type: "string"
      },
      locationName: "engineVersion"
    },
    Logs: {
      shape: _Logs,
      locationName: "logs"
    }
  }
};
