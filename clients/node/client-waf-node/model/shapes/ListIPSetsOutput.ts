import { _IPSetSummaries } from "./_IPSetSummaries";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListIPSetsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    NextMarker: {
      shape: {
        type: "string",
        min: 1
      }
    },
    IPSets: {
      shape: _IPSetSummaries
    }
  }
};
