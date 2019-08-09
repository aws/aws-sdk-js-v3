import { DescribeEventTopicsInput } from "./DescribeEventTopicsInput";
import { DescribeEventTopicsOutput } from "./DescribeEventTopicsOutput";
import { EntityDoesNotExistException } from "./EntityDoesNotExistException";
import { InvalidParameterException } from "./InvalidParameterException";
import { ClientException } from "./ClientException";
import { ServiceException } from "./ServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeEventTopics: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeEventTopics",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeEventTopicsInput
  },
  output: {
    shape: DescribeEventTopicsOutput
  },
  errors: [
    {
      shape: EntityDoesNotExistException
    },
    {
      shape: InvalidParameterException
    },
    {
      shape: ClientException
    },
    {
      shape: ServiceException
    }
  ]
};
