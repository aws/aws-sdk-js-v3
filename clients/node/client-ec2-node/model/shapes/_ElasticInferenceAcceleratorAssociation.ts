import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ElasticInferenceAcceleratorAssociation: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ElasticInferenceAcceleratorArn: {
      shape: {
        type: "string"
      },
      locationName: "elasticInferenceAcceleratorArn"
    },
    ElasticInferenceAcceleratorAssociationId: {
      shape: {
        type: "string"
      },
      locationName: "elasticInferenceAcceleratorAssociationId"
    },
    ElasticInferenceAcceleratorAssociationState: {
      shape: {
        type: "string"
      },
      locationName: "elasticInferenceAcceleratorAssociationState"
    },
    ElasticInferenceAcceleratorAssociationTime: {
      shape: {
        type: "timestamp"
      },
      locationName: "elasticInferenceAcceleratorAssociationTime"
    }
  }
};
