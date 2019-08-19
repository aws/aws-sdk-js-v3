import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ContainerDetails: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Name: {
      shape: {
        type: "string"
      }
    },
    ImageId: {
      shape: {
        type: "string"
      }
    },
    ImageName: {
      shape: {
        type: "string"
      }
    },
    LaunchedAt: {
      shape: {
        type: "string"
      }
    }
  }
};
