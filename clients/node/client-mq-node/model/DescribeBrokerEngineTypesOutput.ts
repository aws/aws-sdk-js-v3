import { ___listOfBrokerEngineType } from "./___listOfBrokerEngineType";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeBrokerEngineTypesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    BrokerEngineTypes: {
      shape: ___listOfBrokerEngineType,
      locationName: "brokerEngineTypes"
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
