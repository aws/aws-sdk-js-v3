import { DescribeGroupInput } from "./DescribeGroupInput";
import { DescribeGroupOutput } from "./DescribeGroupOutput";
import { EntityNotFoundException } from "./EntityNotFoundException";
import { InvalidParameterException } from "./InvalidParameterException";
import { OrganizationNotFoundException } from "./OrganizationNotFoundException";
import { OrganizationStateException } from "./OrganizationStateException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
