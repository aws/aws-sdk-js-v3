import { DescribeOrganizationInput } from "../shapes/DescribeOrganizationInput";
import { DescribeOrganizationOutput } from "../shapes/DescribeOrganizationOutput";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { OrganizationNotFoundException } from "../shapes/OrganizationNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
      shape: InvalidParameterException
    },
    {
      shape: OrganizationNotFoundException
    }
  ]
};
