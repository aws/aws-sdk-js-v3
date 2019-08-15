import { _DelegationSets } from "./_DelegationSets";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListReusableDelegationSetsOutput: _Structure_ = {
  type: "structure",
  required: ["DelegationSets", "Marker", "IsTruncated", "MaxItems"],
  members: {
    DelegationSets: {
      shape: _DelegationSets
    },
    Marker: {
      shape: {
        type: "string"
      }
    },
    IsTruncated: {
      shape: {
        type: "boolean"
      }
    },
    NextMarker: {
      shape: {
        type: "string"
      }
    },
    MaxItems: {
      shape: {
        type: "string"
      }
    }
  }
};
