import { List as _List_ } from "@aws-sdk/types";
import { _EnvironmentImage } from "./_EnvironmentImage";

export const _EnvironmentImages: _List_ = {
  type: "list",
  member: {
    shape: _EnvironmentImage
  }
};
