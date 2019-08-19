import { DescribeAssociationExecutionTargetsInput } from "../shapes/DescribeAssociationExecutionTargetsInput";
import { DescribeAssociationExecutionTargetsOutput } from "../shapes/DescribeAssociationExecutionTargetsOutput";
import { InternalServerError } from "../shapes/InternalServerError";
import { AssociationDoesNotExist } from "../shapes/AssociationDoesNotExist";
import { InvalidNextToken } from "../shapes/InvalidNextToken";
import { AssociationExecutionDoesNotExist } from "../shapes/AssociationExecutionDoesNotExist";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
