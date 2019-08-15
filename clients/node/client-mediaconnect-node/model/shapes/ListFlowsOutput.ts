import { ___listOfListedFlow } from "./___listOfListedFlow";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListFlowsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Flows: {
      shape: ___listOfListedFlow,
      locationName: "flows"
    },
    NextToken: {
      shape: {
        type: "string"
      },
      locationName: "nextToken"
    }
  }
};
