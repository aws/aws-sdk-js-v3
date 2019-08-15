import { List as _List_ } from "@aws-sdk/types";
import { _OutputArtifact } from "./_OutputArtifact";

export const _OutputArtifactList: _List_ = {
  type: "list",
  member: {
    shape: _OutputArtifact
  }
};
