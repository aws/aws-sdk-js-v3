import { DescribeResourceInput } from "./DescribeResourceInput";
import { DescribeResourceOutput } from "./DescribeResourceOutput";
import { EntityNotFoundException } from "./EntityNotFoundException";
import { InvalidParameterException } from "./InvalidParameterException";
import { OrganizationNotFoundException } from "./OrganizationNotFoundException";
import { OrganizationStateException } from "./OrganizationStateException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
