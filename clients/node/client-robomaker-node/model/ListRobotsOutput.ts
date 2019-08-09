import { _Robots } from "./_Robots";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListRobotsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    robots: {
      shape: _Robots
    },
    nextToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
