import { List as _List_ } from "@aws-sdk/types";
import { _InputArtifact } from "./_InputArtifact";

export const _InputArtifactList: _List_ = {
  type: "list",
  member: {
    shape: _InputArtifact
  }
};
