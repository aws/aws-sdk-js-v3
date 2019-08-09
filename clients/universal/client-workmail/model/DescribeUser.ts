import { DescribeUserInput } from "./DescribeUserInput";
import { DescribeUserOutput } from "./DescribeUserOutput";
import { EntityNotFoundException } from "./EntityNotFoundException";
import { InvalidParameterException } from "./InvalidParameterException";
import { OrganizationNotFoundException } from "./OrganizationNotFoundException";
import { OrganizationStateException } from "./OrganizationStateException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeUser: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeUser",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeUserInput
  },
  output: {
    shape: DescribeUserOutput
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
