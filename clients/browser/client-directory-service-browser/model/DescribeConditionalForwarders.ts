import { DescribeConditionalForwardersInput } from "./DescribeConditionalForwardersInput";
import { DescribeConditionalForwardersOutput } from "./DescribeConditionalForwardersOutput";
import { EntityDoesNotExistException } from "./EntityDoesNotExistException";
import { DirectoryUnavailableException } from "./DirectoryUnavailableException";
import { InvalidParameterException } from "./InvalidParameterException";
import { UnsupportedOperationException } from "./UnsupportedOperationException";
import { ClientException } from "./ClientException";
import { ServiceException } from "./ServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
