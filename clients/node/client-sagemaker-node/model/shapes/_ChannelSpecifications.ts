import { List as _List_ } from "@aws-sdk/types";
import { _ChannelSpecification } from "./_ChannelSpecification";

export const _ChannelSpecifications: _List_ = {
  type: "list",
  min: 1,
  member: {
    shape: _ChannelSpecification
  }
};
