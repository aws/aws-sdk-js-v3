import { Structure as _Structure_ } from "@aws-sdk/types";

export const ConfigurationSetDoesNotExistException: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ConfigurationSetName: {
      shape: {
        type: "string"
      }
    }
  },
  exceptionType: "ConfigurationSetDoesNotExistException",
  exceptionCode: "ConfigurationSetDoesNotExist"
};
