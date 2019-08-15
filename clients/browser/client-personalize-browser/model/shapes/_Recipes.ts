import { List as _List_ } from "@aws-sdk/types";
import { _RecipeSummary } from "./_RecipeSummary";

export const _Recipes: _List_ = {
  type: "list",
  member: {
    shape: _RecipeSummary
  }
};
