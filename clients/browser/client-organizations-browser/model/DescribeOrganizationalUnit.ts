import { DescribeOrganizationalUnitInput } from "./DescribeOrganizationalUnitInput";
import { DescribeOrganizationalUnitOutput } from "./DescribeOrganizationalUnitOutput";
import { AccessDeniedException } from "./AccessDeniedException";
import { AWSOrganizationsNotInUseException } from "./AWSOrganizationsNotInUseException";
import { InvalidInputException } from "./InvalidInputException";
import { OrganizationalUnitNotFoundException } from "./OrganizationalUnitNotFoundException";
import { ServiceException } from "./ServiceException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
