import { _PortfolioDetail } from "./_PortfolioDetail";
import { _Tags } from "./_Tags";
import { _TagOptionDetails } from "./_TagOptionDetails";
import { _Budgets } from "./_Budgets";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribePortfolioOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    PortfolioDetail: {
      shape: _PortfolioDetail
    },
    Tags: {
      shape: _Tags
    },
    TagOptions: {
      shape: _TagOptionDetails
    },
    Budgets: {
      shape: _Budgets
    }
  }
};
