import { List as _List_ } from "@aws-sdk/types";
import { _ImageDiskContainer } from "./_ImageDiskContainer";

export const _ImageDiskContainerList: _List_ = {
  type: "list",
  member: {
    shape: _ImageDiskContainer,
    locationName: "item"
  }
};
