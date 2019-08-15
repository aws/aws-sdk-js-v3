import { Structure as _Structure_ } from "@aws-sdk/types";

export const SetSecurityTokenServicePreferencesInput: _Structure_ = {
  type: "structure",
  required: ["GlobalEndpointTokenVersion"],
  members: {
    GlobalEndpointTokenVersion: {
      shape: {
        type: "string"
      }
    }
  }
};
