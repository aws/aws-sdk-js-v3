import { List as _List_ } from "@aws-sdk/types";
import { _CreatedArtifact } from "./_CreatedArtifact";

export const _CreatedArtifactList: _List_ = {
  type: "list",
  member: {
    shape: _CreatedArtifact
  }
};
