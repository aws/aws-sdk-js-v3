import { DescribeUserProfilesInput } from "./DescribeUserProfilesInput";
import { DescribeUserProfilesOutput } from "./DescribeUserProfilesOutput";
import { ValidationException } from "./ValidationException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeUserProfiles: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeUserProfiles",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeUserProfilesInput
  },
  output: {
    shape: DescribeUserProfilesOutput
  },
  errors: [
    {
      shape: ValidationException
    },
    {
      shape: ResourceNotFoundException
    }
  ]
};
