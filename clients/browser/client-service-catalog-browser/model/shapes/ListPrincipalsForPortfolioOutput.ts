import { _Principals } from "./_Principals";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListPrincipalsForPortfolioOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Principals: {
      shape: _Principals
    },
    NextPageToken: {
      shape: {
        type: "string"
      }
    }
  }
};
