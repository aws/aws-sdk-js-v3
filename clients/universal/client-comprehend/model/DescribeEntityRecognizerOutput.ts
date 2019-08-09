import { _EntityRecognizerProperties } from "./_EntityRecognizerProperties";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeEntityRecognizerOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    EntityRecognizerProperties: {
      shape: _EntityRecognizerProperties
    }
  }
};
