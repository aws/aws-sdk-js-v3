import { DescribeConditionalForwardersInput } from "../shapes/DescribeConditionalForwardersInput";
import { DescribeConditionalForwardersOutput } from "../shapes/DescribeConditionalForwardersOutput";
import { EntityDoesNotExistException } from "../shapes/EntityDoesNotExistException";
import { DirectoryUnavailableException } from "../shapes/DirectoryUnavailableException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { UnsupportedOperationException } from "../shapes/UnsupportedOperationException";
import { ClientException } from "../shapes/ClientException";
import { ServiceException } from "../shapes/ServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeConditionalForwarders: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeConditionalForwarders",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeConditionalForwardersInput
  },
  output: {
    shape: DescribeConditionalForwardersOutput
  },
  errors: [
    {
      shape: EntityDoesNotExistException
    },
    {
      shape: DirectoryUnavailableException
    },
    {
      shape: InvalidParameterException
    },
    {
      shape: UnsupportedOperationException
    },
    {
      shape: ClientException
    },
    {
      shape: ServiceException
    }
  ]
};
