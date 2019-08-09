import { ___listOfDeployment } from "./___listOfDeployment";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetDeploymentsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Items: {
      shape: ___listOfDeployment,
      locationName: "items"
    },
    NextToken: {
      shape: {
        type: "string"
      },
      locationName: "nextToken"
    }
  }
};
