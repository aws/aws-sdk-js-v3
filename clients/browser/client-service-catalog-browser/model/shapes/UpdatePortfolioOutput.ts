import { _PortfolioDetail } from "./_PortfolioDetail";
import { _Tags } from "./_Tags";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdatePortfolioOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    PortfolioDetail: {
      shape: _PortfolioDetail
    },
    Tags: {
      shape: _Tags
    }
  }
};
