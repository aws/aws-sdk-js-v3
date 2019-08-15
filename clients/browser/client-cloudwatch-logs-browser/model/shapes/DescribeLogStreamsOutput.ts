import { _LogStreams } from "./_LogStreams";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeLogStreamsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    logStreams: {
      shape: _LogStreams
    },
    nextToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
