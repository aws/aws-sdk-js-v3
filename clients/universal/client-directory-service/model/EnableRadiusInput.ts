import { _RadiusSettings } from "./_RadiusSettings";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const EnableRadiusInput: _Structure_ = {
  type: "structure",
  required: ["DirectoryId", "RadiusSettings"],
  members: {
    DirectoryId: {
      shape: {
        type: "string"
      }
    },
    RadiusSettings: {
      shape: _RadiusSettings
    }
  }
};
