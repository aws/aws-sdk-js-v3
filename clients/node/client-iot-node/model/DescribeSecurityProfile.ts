import { DescribeSecurityProfileInput } from "./DescribeSecurityProfileInput";
import { DescribeSecurityProfileOutput } from "./DescribeSecurityProfileOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ThrottlingException } from "./ThrottlingException";
import { InternalFailureException } from "./InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeSecurityProfile: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeSecurityProfile",
  http: {
    method: "GET",
    requestUri: "/security-profiles/{securityProfileName}"
  },
  input: {
    shape: DescribeSecurityProfileInput
  },
  output: {
    shape: DescribeSecurityProfileOutput
  },
  errors: [
    {
      shape: InvalidRequestException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: ThrottlingException
    },
    {
      shape: InternalFailureException
    }
  ]
};
