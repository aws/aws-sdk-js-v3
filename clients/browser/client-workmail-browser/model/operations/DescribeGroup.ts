import { DescribeGroupInput } from "../shapes/DescribeGroupInput";
import { DescribeGroupOutput } from "../shapes/DescribeGroupOutput";
import { EntityNotFoundException } from "../shapes/EntityNotFoundException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { OrganizationNotFoundException } from "../shapes/OrganizationNotFoundException";
import { OrganizationStateException } from "../shapes/OrganizationStateException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeGroup: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeGroup",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeGroupInput
  },
  output: {
    shape: DescribeGroupOutput
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
