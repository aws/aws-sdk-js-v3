import { List as _List_ } from "@aws-sdk/types";
import { _MLModel } from "./_MLModel";

export const _MLModels: _List_ = {
  type: "list",
  member: {
    shape: _MLModel
  }
};
