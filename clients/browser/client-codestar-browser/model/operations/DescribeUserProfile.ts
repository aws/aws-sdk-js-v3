import { DescribeUserProfileInput } from "../shapes/DescribeUserProfileInput";
import { DescribeUserProfileOutput } from "../shapes/DescribeUserProfileOutput";
import { UserProfileNotFoundException } from "../shapes/UserProfileNotFoundException";
import { ValidationException } from "../shapes/ValidationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
