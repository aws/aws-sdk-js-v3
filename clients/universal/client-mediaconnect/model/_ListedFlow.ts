import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ListedFlow: _Structure_ = {
  type: "structure",
  required: [
    "Status",
    "Description",
    "SourceType",
    "AvailabilityZone",
    "FlowArn",
    "Name"
  ],
  members: {
    AvailabilityZone: {
      shape: {
        type: "string"
      },
      locationName: "availabilityZone"
    },
    Description: {
      shape: {
        type: "string"
      },
      locationName: "description"
    },
    FlowArn: {
      shape: {
        type: "string"
      },
      locationName: "flowArn"
    },
    Name: {
      shape: {
        type: "string"
      },
      locationName: "name"
    },
    SourceType: {
      shape: {
        type: "string"
      },
      locationName: "sourceType"
    },
    Status: {
      shape: {
        type: "string"
      },
      locationName: "status"
    }
  }
};
