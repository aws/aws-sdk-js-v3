import { List as _List_ } from "@aws-sdk/types";
import { _ArtifactRevision } from "./_ArtifactRevision";

export const _ArtifactRevisionList: _List_ = {
  type: "list",
  member: {
    shape: _ArtifactRevision
  }
};
