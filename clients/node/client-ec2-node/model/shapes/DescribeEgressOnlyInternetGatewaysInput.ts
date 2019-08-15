import { _EgressOnlyInternetGatewayIdList } from "./_EgressOnlyInternetGatewayIdList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeEgressOnlyInternetGatewaysInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    DryRun: {
      shape: {
        type: "boolean"
      }
    },
    EgressOnlyInternetGatewayIds: {
      shape: _EgressOnlyInternetGatewayIdList,
      locationName: "EgressOnlyInternetGatewayId"
    },
    MaxResults: {
      shape: {
        type: "integer",
        min: 5
      }
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
