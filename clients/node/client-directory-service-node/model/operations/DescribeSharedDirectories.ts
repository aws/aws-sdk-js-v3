import { DescribeSharedDirectoriesInput } from "../shapes/DescribeSharedDirectoriesInput";
import { DescribeSharedDirectoriesOutput } from "../shapes/DescribeSharedDirectoriesOutput";
import { EntityDoesNotExistException } from "../shapes/EntityDoesNotExistException";
import { InvalidNextTokenException } from "../shapes/InvalidNextTokenException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { UnsupportedOperationException } from "../shapes/UnsupportedOperationException";
import { ClientException } from "../shapes/ClientException";
import { ServiceException } from "../shapes/ServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeSharedDirectories: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeSharedDirectories",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeSharedDirectoriesInput
  },
  output: {
    shape: DescribeSharedDirectoriesOutput
  },
  errors: [
    {
      shape: EntityDoesNotExistException
    },
    {
      shape: InvalidNextTokenException
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
