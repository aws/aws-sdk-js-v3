import { _BlacklistItemNames } from "./_BlacklistItemNames";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetBlacklistReportsInput: _Structure_ = {
  type: "structure",
  required: ["BlacklistItemNames"],
  members: {
    BlacklistItemNames: {
      shape: _BlacklistItemNames,
      location: "querystring",
      locationName: "BlacklistItemNames"
    }
  }
};
