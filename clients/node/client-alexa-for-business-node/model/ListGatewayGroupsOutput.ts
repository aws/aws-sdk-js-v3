import { _GatewayGroupSummaries } from "./_GatewayGroupSummaries";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListGatewayGroupsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    GatewayGroups: {
      shape: _GatewayGroupSummaries
    },
    NextToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
