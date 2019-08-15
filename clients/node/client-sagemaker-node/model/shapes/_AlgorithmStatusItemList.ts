import { List as _List_ } from "@aws-sdk/types";
import { _AlgorithmStatusItem } from "./_AlgorithmStatusItem";

export const _AlgorithmStatusItemList: _List_ = {
  type: "list",
  member: {
    shape: _AlgorithmStatusItem
  }
};
