import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeContainerInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ContainerName: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
