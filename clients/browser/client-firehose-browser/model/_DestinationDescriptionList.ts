import { List as _List_ } from "@aws-sdk/types";
import { _DestinationDescription } from "./_DestinationDescription";

export const _DestinationDescriptionList: _List_ = {
  type: "list",
  member: {
    shape: _DestinationDescription
  }
};
