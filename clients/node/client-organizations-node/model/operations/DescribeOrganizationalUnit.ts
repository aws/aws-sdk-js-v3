import { DescribeOrganizationalUnitInput } from "../shapes/DescribeOrganizationalUnitInput";
import { DescribeOrganizationalUnitOutput } from "../shapes/DescribeOrganizationalUnitOutput";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { AWSOrganizationsNotInUseException } from "../shapes/AWSOrganizationsNotInUseException";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { OrganizationalUnitNotFoundException } from "../shapes/OrganizationalUnitNotFoundException";
import { ServiceException } from "../shapes/ServiceException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeOrganizationalUnit: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeOrganizationalUnit",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeOrganizationalUnitInput
  },
  output: {
    shape: DescribeOrganizationalUnitOutput
  },
  errors: [
    {
      shape: AccessDeniedException
    },
    {
      shape: AWSOrganizationsNotInUseException
    },
    {
      shape: InvalidInputException
    },
    {
      shape: OrganizationalUnitNotFoundException
    },
    {
      shape: ServiceException
    },
    {
      shape: TooManyRequestsException
    }
  ]
};
