import { DescribeDirectoriesInput } from "./DescribeDirectoriesInput";
import { DescribeDirectoriesOutput } from "./DescribeDirectoriesOutput";
import { EntityDoesNotExistException } from "./EntityDoesNotExistException";
import { InvalidParameterException } from "./InvalidParameterException";
import { InvalidNextTokenException } from "./InvalidNextTokenException";
import { ClientException } from "./ClientException";
import { ServiceException } from "./ServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
