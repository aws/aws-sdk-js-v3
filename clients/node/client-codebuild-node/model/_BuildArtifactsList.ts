import { List as _List_ } from "@aws-sdk/types";
import { _BuildArtifacts } from "./_BuildArtifacts";

export const _BuildArtifactsList: _List_ = {
  type: "list",
  member: {
    shape: _BuildArtifacts
  }
};
