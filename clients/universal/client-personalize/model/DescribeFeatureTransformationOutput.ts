import { _FeatureTransformation } from "./_FeatureTransformation";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeFeatureTransformationOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    featureTransformation: {
      shape: _FeatureTransformation
    }
  }
};
