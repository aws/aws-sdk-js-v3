import { DescribeInstanceAssociationsStatusInput } from "./DescribeInstanceAssociationsStatusInput";
import { DescribeInstanceAssociationsStatusOutput } from "./DescribeInstanceAssociationsStatusOutput";
import { InternalServerError } from "./InternalServerError";
import { InvalidInstanceId } from "./InvalidInstanceId";
import { InvalidNextToken } from "./InvalidNextToken";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
