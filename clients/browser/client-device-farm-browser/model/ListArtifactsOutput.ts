import { _Artifacts } from "./_Artifacts";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListArtifactsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    artifacts: {
      shape: _Artifacts
    },
    nextToken: {
      shape: {
        type: "string",
        min: 4
      }
    }
  }
};
