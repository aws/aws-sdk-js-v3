import { ___listOfQueue } from "./___listOfQueue";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListQueuesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    NextToken: {
      shape: {
        type: "string"
      },
      locationName: "nextToken"
    },
    Queues: {
      shape: ___listOfQueue,
      locationName: "queues"
    }
  }
};
