import { _AppSummary } from "./_AppSummary";
import { _ServerGroups } from "./_ServerGroups";
import { _Tags } from "./_Tags";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateAppOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    appSummary: {
      shape: _AppSummary
    },
    serverGroups: {
      shape: _ServerGroups
    },
    tags: {
      shape: _Tags
    }
  }
};
