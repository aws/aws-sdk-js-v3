import { DescribeEventTopicsInput } from "../shapes/DescribeEventTopicsInput";
import { DescribeEventTopicsOutput } from "../shapes/DescribeEventTopicsOutput";
import { EntityDoesNotExistException } from "../shapes/EntityDoesNotExistException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { ClientException } from "../shapes/ClientException";
import { ServiceException } from "../shapes/ServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
