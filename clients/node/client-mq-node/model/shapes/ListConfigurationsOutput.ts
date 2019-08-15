import { ___listOfConfiguration } from "./___listOfConfiguration";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListConfigurationsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Configurations: {
      shape: ___listOfConfiguration,
      locationName: "configurations"
    },
    MaxResults: {
      shape: {
        type: "integer"
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
