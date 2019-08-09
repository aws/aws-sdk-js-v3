import { _AccountIds } from "./_AccountIds";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListPortfolioAccessOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AccountIds: {
      shape: _AccountIds
    },
    NextPageToken: {
      shape: {
        type: "string"
      }
    }
  }
};
