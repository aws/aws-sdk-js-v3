import { Structure as _Structure_ } from "@aws-sdk/types";

export const ConfigurationSetAlreadyExistsException: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ConfigurationSetName: {
      shape: {
        type: "string"
      }
    }
  },
  exceptionType: "ConfigurationSetAlreadyExistsException",
  exceptionCode: "ConfigurationSetAlreadyExists"
};
