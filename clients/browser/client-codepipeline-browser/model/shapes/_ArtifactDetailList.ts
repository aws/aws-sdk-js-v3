import { List as _List_ } from "@aws-sdk/types";
import { _ArtifactDetail } from "./_ArtifactDetail";

export const _ArtifactDetailList: _List_ = {
  type: "list",
  member: {
    shape: _ArtifactDetail
  }
};
