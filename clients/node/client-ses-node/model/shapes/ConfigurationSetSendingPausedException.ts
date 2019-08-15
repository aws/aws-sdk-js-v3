import { Structure as _Structure_ } from "@aws-sdk/types";

export const ConfigurationSetSendingPausedException: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ConfigurationSetName: {
      shape: {
        type: "string"
      }
    }
  },
  exceptionType: "ConfigurationSetSendingPausedException",
  exceptionCode: "ConfigurationSetSendingPausedException"
};
