import { DescribeOrganizationInput } from "./DescribeOrganizationInput";
import { DescribeOrganizationOutput } from "./DescribeOrganizationOutput";
import { AccessDeniedException } from "./AccessDeniedException";
import { AWSOrganizationsNotInUseException } from "./AWSOrganizationsNotInUseException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { ServiceException } from "./ServiceException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeOrganization: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeOrganization",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeOrganizationInput
  },
  output: {
    shape: DescribeOrganizationOutput
  },
  errors: [
    {
      shape: AccessDeniedException
    },
    {
      shape: AWSOrganizationsNotInUseException
    },
    {
      shape: ConcurrentModificationException
    },
    {
      shape: ServiceException
    },
    {
      shape: TooManyRequestsException
    }
  ]
};
