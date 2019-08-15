import { ___listOfBrokerSummary } from "./___listOfBrokerSummary";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListBrokersOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    BrokerSummaries: {
      shape: ___listOfBrokerSummary,
      locationName: "brokerSummaries"
    },
    NextToken: {
      shape: {
        type: "string"
      },
      locationName: "nextToken"
    }
  }
};
