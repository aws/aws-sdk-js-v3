import { _MapStringToString } from "./_MapStringToString";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreatePlatformEndpointInput: _Structure_ = {
  type: "structure",
  required: ["PlatformApplicationArn", "Token"],
  members: {
    PlatformApplicationArn: {
      shape: {
        type: "string"
      }
    },
    Token: {
      shape: {
        type: "string"
      }
    },
    CustomUserData: {
      shape: {
        type: "string"
      }
    },
    Attributes: {
      shape: _MapStringToString
    }
  }
};
