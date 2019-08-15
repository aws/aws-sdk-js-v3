import { DescribeAssociationExecutionsInput } from "../shapes/DescribeAssociationExecutionsInput";
import { DescribeAssociationExecutionsOutput } from "../shapes/DescribeAssociationExecutionsOutput";
import { InternalServerError } from "../shapes/InternalServerError";
import { AssociationDoesNotExist } from "../shapes/AssociationDoesNotExist";
import { InvalidNextToken } from "../shapes/InvalidNextToken";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeAssociationExecutions: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeAssociationExecutions",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeAssociationExecutionsInput
  },
  output: {
    shape: DescribeAssociationExecutionsOutput
  },
  errors: [
    {
      shape: InternalServerError
    },
    {
      shape: AssociationDoesNotExist
    },
    {
      shape: InvalidNextToken
    }
  ]
};
