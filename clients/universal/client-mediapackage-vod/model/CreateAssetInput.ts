import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateAssetInput: _Structure_ = {
  type: "structure",
  required: ["SourceArn", "Id", "PackagingGroupId", "SourceRoleArn"],
  members: {
    Id: {
      shape: {
        type: "string"
      },
      locationName: "id"
    },
    PackagingGroupId: {
      shape: {
        type: "string"
      },
      locationName: "packagingGroupId"
    },
    ResourceId: {
      shape: {
        type: "string"
      },
      locationName: "resourceId"
    },
    SourceArn: {
      shape: {
        type: "string"
      },
      locationName: "sourceArn"
    },
    SourceRoleArn: {
      shape: {
        type: "string"
      },
      locationName: "sourceRoleArn"
    }
  }
};
