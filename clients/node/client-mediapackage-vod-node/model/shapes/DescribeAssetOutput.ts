import { ___listOfEgressEndpoint } from "./___listOfEgressEndpoint";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeAssetOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Arn: {
      shape: {
        type: "string"
      },
      locationName: "arn"
    },
    EgressEndpoints: {
      shape: ___listOfEgressEndpoint,
      locationName: "egressEndpoints"
    },
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
