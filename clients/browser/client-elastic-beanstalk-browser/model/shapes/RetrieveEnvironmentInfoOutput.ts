import { _EnvironmentInfoDescriptionList } from "./_EnvironmentInfoDescriptionList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const RetrieveEnvironmentInfoOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    EnvironmentInfo: {
      shape: _EnvironmentInfoDescriptionList
    }
  }
};
