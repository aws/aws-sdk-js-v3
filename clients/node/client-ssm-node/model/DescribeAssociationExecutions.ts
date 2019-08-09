import { DescribeAssociationExecutionsInput } from "./DescribeAssociationExecutionsInput";
import { DescribeAssociationExecutionsOutput } from "./DescribeAssociationExecutionsOutput";
import { InternalServerError } from "./InternalServerError";
import { AssociationDoesNotExist } from "./AssociationDoesNotExist";
import { InvalidNextToken } from "./InvalidNextToken";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
