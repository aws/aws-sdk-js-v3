import { _BuildIds } from "./_BuildIds";
import { _BuildsNotDeleted } from "./_BuildsNotDeleted";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const BatchDeleteBuildsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    buildsDeleted: {
      shape: _BuildIds
    },
    buildsNotDeleted: {
      shape: _BuildsNotDeleted
    }
  }
};
