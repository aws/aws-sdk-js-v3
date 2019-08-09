import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeFeatureTransformationInput: _Structure_ = {
  type: "structure",
  required: ["featureTransformationArn"],
  members: {
    featureTransformationArn: {
      shape: {
        type: "string"
      }
    }
  }
};
