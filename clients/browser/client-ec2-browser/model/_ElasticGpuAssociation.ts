import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ElasticGpuAssociation: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ElasticGpuId: {
      shape: {
        type: "string"
      },
      locationName: "elasticGpuId"
    },
    ElasticGpuAssociationId: {
      shape: {
        type: "string"
      },
      locationName: "elasticGpuAssociationId"
    },
    ElasticGpuAssociationState: {
      shape: {
        type: "string"
      },
      locationName: "elasticGpuAssociationState"
    },
    ElasticGpuAssociationTime: {
      shape: {
        type: "string"
      },
      locationName: "elasticGpuAssociationTime"
    }
  }
};
