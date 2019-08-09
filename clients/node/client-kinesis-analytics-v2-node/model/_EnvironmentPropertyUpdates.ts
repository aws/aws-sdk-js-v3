import { _PropertyGroups } from "./_PropertyGroups";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _EnvironmentPropertyUpdates: _Structure_ = {
  type: "structure",
  required: ["PropertyGroups"],
  members: {
    PropertyGroups: {
      shape: _PropertyGroups
    }
  }
};
