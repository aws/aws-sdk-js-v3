import { _Container } from "./_Container";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeContainerOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Container: {
      shape: _Container
    }
  }
};
