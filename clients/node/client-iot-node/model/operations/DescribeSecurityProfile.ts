import { DescribeSecurityProfileInput } from "../shapes/DescribeSecurityProfileInput";
import { DescribeSecurityProfileOutput } from "../shapes/DescribeSecurityProfileOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
