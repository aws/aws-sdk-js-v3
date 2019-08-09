import { Structure as _Structure_ } from "@aws-sdk/types";

export const _IamInstanceProfileSpecification: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Arn: {
      shape: {
        type: "string"
      },
      locationName: "arn"
    },
    Name: {
      shape: {
        type: "string"
      },
      locationName: "name"
    }
  }
};
