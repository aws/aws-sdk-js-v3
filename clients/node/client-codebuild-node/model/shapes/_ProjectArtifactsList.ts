import { List as _List_ } from "@aws-sdk/types";
import { _ProjectArtifacts } from "./_ProjectArtifacts";

export const _ProjectArtifactsList: _List_ = {
  type: "list",
  member: {
    shape: _ProjectArtifacts
  }
};
