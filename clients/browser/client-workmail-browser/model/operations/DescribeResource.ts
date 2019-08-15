import { DescribeResourceInput } from "../shapes/DescribeResourceInput";
import { DescribeResourceOutput } from "../shapes/DescribeResourceOutput";
import { EntityNotFoundException } from "../shapes/EntityNotFoundException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { OrganizationNotFoundException } from "../shapes/OrganizationNotFoundException";
import { OrganizationStateException } from "../shapes/OrganizationStateException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeResource: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeResource",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeResourceInput
  },
  output: {
    shape: DescribeResourceOutput
  },
  errors: [
    {
      shape: EntityNotFoundException
    },
    {
      shape: InvalidParameterException
    },
    {
      shape: OrganizationNotFoundException
    },
    {
      shape: OrganizationStateException
    }
  ]
};
