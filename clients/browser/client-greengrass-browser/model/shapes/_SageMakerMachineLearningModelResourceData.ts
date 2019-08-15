import { Structure as _Structure_ } from "@aws-sdk/types";

export const _SageMakerMachineLearningModelResourceData: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    DestinationPath: {
      shape: {
        type: "string"
      }
    },
    SageMakerJobArn: {
      shape: {
        type: "string"
      }
    }
  }
};
