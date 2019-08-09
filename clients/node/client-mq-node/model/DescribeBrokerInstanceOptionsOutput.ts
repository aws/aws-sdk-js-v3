import { ___listOfBrokerInstanceOption } from "./___listOfBrokerInstanceOption";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeBrokerInstanceOptionsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    BrokerInstanceOptions: {
      shape: ___listOfBrokerInstanceOption,
      locationName: "brokerInstanceOptions"
    },
    MaxResults: {
      shape: {
        type: "integer",
        min: 5
      },
      locationName: "maxResults"
    },
    NextToken: {
      shape: {
        type: "string"
      },
      locationName: "nextToken"
    }
  }
};
