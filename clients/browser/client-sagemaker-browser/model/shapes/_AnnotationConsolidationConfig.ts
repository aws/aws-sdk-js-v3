import { Structure as _Structure_ } from "@aws-sdk/types";

export const _AnnotationConsolidationConfig: _Structure_ = {
  type: "structure",
  required: ["AnnotationConsolidationLambdaArn"],
  members: {
    AnnotationConsolidationLambdaArn: {
      shape: {
        type: "string"
      }
    }
  }
};
