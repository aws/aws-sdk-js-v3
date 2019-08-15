import { List as _List_ } from "@aws-sdk/types";
import { _Artifact } from "./_Artifact";

export const _Artifacts: _List_ = {
  type: "list",
  member: {
    shape: _Artifact
  }
};
