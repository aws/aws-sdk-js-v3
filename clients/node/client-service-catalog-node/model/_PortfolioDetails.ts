import { List as _List_ } from "@aws-sdk/types";
import { _PortfolioDetail } from "./_PortfolioDetail";

export const _PortfolioDetails: _List_ = {
  type: "list",
  member: {
    shape: _PortfolioDetail
  }
};
