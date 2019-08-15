import { _AggregationAuthorization } from "./_AggregationAuthorization";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const PutAggregationAuthorizationOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AggregationAuthorization: {
      shape: _AggregationAuthorization
    }
  }
};
