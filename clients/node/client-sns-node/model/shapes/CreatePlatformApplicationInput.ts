import { _MapStringToString } from "./_MapStringToString";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreatePlatformApplicationInput: _Structure_ = {
  type: "structure",
  required: ["Name", "Platform", "Attributes"],
  members: {
    Name: {
      shape: {
        type: "string"
      }
    },
    Platform: {
      shape: {
        type: "string"
      }
    },
    Attributes: {
      shape: _MapStringToString
    }
  }
};
