import { List as _List_ } from "@aws-sdk/types";
import { _BackendServerDescription } from "./_BackendServerDescription";

export const _BackendServerDescriptions: _List_ = {
  type: "list",
  member: {
    shape: _BackendServerDescription
  }
};
