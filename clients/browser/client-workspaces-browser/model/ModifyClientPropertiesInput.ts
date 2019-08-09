import { _ClientProperties } from "./_ClientProperties";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ModifyClientPropertiesInput: _Structure_ = {
  type: "structure",
  required: ["ResourceId", "ClientProperties"],
  members: {
    ResourceId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ClientProperties: {
      shape: _ClientProperties
    }
  }
};
