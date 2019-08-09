import { DescribeAssociationExecutionTargetsInput } from "./DescribeAssociationExecutionTargetsInput";
import { DescribeAssociationExecutionTargetsOutput } from "./DescribeAssociationExecutionTargetsOutput";
import { InternalServerError } from "./InternalServerError";
import { AssociationDoesNotExist } from "./AssociationDoesNotExist";
import { InvalidNextToken } from "./InvalidNextToken";
import { AssociationExecutionDoesNotExist } from "./AssociationExecutionDoesNotExist";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeAssociationExecutionTargets: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeAssociationExecutionTargets",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeAssociationExecutionTargetsInput
  },
  output: {
    shape: DescribeAssociationExecutionTargetsOutput
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
    },
    {
      shape: AssociationExecutionDoesNotExist
    }
  ]
};
