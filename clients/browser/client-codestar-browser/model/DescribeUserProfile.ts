import { DescribeUserProfileInput } from "./DescribeUserProfileInput";
import { DescribeUserProfileOutput } from "./DescribeUserProfileOutput";
import { UserProfileNotFoundException } from "./UserProfileNotFoundException";
import { ValidationException } from "./ValidationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeUserProfile: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeUserProfile",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeUserProfileInput
  },
  output: {
    shape: DescribeUserProfileOutput
  },
  errors: [
    {
      shape: UserProfileNotFoundException
    },
    {
      shape: ValidationException
    }
  ]
};
