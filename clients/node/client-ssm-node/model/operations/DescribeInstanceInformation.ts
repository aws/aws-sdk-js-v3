import { DescribeInstanceInformationInput } from "../shapes/DescribeInstanceInformationInput";
import { DescribeInstanceInformationOutput } from "../shapes/DescribeInstanceInformationOutput";
import { InternalServerError } from "../shapes/InternalServerError";
import { InvalidInstanceId } from "../shapes/InvalidInstanceId";
import { InvalidNextToken } from "../shapes/InvalidNextToken";
import { InvalidInstanceInformationFilterValue } from "../shapes/InvalidInstanceInformationFilterValue";
import { InvalidFilterKey } from "../shapes/InvalidFilterKey";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
