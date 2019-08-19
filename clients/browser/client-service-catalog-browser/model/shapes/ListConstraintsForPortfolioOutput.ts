import { _ConstraintDetails } from "./_ConstraintDetails";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListConstraintsForPortfolioOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ConstraintDetails: {
      shape: _ConstraintDetails
    },
    NextPageToken: {
      shape: {
        type: "string"
      }
    }
  }
};
