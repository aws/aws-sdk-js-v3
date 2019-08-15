import { DescribeDirectoriesInput } from "../shapes/DescribeDirectoriesInput";
import { DescribeDirectoriesOutput } from "../shapes/DescribeDirectoriesOutput";
import { EntityDoesNotExistException } from "../shapes/EntityDoesNotExistException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { InvalidNextTokenException } from "../shapes/InvalidNextTokenException";
import { ClientException } from "../shapes/ClientException";
import { ServiceException } from "../shapes/ServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeDirectories: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeDirectories",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeDirectoriesInput
  },
  output: {
    shape: DescribeDirectoriesOutput
  },
  errors: [
    {
      shape: EntityDoesNotExistException
    },
    {
      shape: InvalidParameterException
    },
    {
      shape: InvalidNextTokenException
    },
    {
      shape: ClientException
    },
    {
      shape: ServiceException
    }
  ]
};
