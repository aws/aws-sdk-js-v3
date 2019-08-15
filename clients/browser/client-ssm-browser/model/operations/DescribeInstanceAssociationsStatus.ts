import { DescribeInstanceAssociationsStatusInput } from "../shapes/DescribeInstanceAssociationsStatusInput";
import { DescribeInstanceAssociationsStatusOutput } from "../shapes/DescribeInstanceAssociationsStatusOutput";
import { InternalServerError } from "../shapes/InternalServerError";
import { InvalidInstanceId } from "../shapes/InvalidInstanceId";
import { InvalidNextToken } from "../shapes/InvalidNextToken";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeInstanceAssociationsStatus: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeInstanceAssociationsStatus",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeInstanceAssociationsStatusInput
  },
  output: {
    shape: DescribeInstanceAssociationsStatusOutput
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
    }
  ]
};
