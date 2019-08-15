import { List as _List_ } from "@aws-sdk/types";
import { _ApplicationSource } from "./_ApplicationSource";

export const _ApplicationSources: _List_ = {
  type: "list",
  member: {
    shape: _ApplicationSource
  }
};
