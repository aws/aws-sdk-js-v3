import { List as _List_ } from "@aws-sdk/types";
import { _EndpointDescription } from "./_EndpointDescription";

export const _EndpointDescriptions: _List_ = {
  type: "list",
  member: {
    shape: _EndpointDescription
  }
};
