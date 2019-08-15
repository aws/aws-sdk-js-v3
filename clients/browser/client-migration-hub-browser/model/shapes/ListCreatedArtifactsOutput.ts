import { _CreatedArtifactList } from "./_CreatedArtifactList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListCreatedArtifactsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    NextToken: {
      shape: {
        type: "string"
      }
    },
    CreatedArtifactList: {
      shape: _CreatedArtifactList
    }
  }
};
