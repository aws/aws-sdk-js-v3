import { _EnvironmentDescriptionsList } from "./_EnvironmentDescriptionsList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ComposeEnvironmentsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Environments: {
      shape: _EnvironmentDescriptionsList
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
