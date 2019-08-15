import { _Builds } from "./_Builds";
import { _BuildIds } from "./_BuildIds";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const BatchGetBuildsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    builds: {
      shape: _Builds
    },
    buildsNotFound: {
      shape: _BuildIds
    }
  }
};
