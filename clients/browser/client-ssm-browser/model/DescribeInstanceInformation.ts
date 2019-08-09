import { DescribeInstanceInformationInput } from "./DescribeInstanceInformationInput";
import { DescribeInstanceInformationOutput } from "./DescribeInstanceInformationOutput";
import { InternalServerError } from "./InternalServerError";
import { InvalidInstanceId } from "./InvalidInstanceId";
import { InvalidNextToken } from "./InvalidNextToken";
import { InvalidInstanceInformationFilterValue } from "./InvalidInstanceInformationFilterValue";
import { InvalidFilterKey } from "./InvalidFilterKey";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeInstanceInformation: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeInstanceInformation",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeInstanceInformationInput
  },
  output: {
    shape: DescribeInstanceInformationOutput
  },
  errors: [
    {
      shape: InternalServerError
    },
    {
      shape: InvalidInstanceId
    },
    {
      shape: InvalidNextToken
    },
    {
      shape: InvalidInstanceInformationFilterValue
    },
    {
      shape: InvalidFilterKey
    }
  ]
};
