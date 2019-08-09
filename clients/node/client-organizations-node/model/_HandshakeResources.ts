import { List as _List_ } from "@aws-sdk/types";
import { _HandshakeResource } from "./_HandshakeResource";

export const _HandshakeResources: _List_ = {
  type: "list",
  member: {
    shape: _HandshakeResource
  }
};
