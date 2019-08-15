import { DescribeAttackInput } from "../shapes/DescribeAttackInput";
import { DescribeAttackOutput } from "../shapes/DescribeAttackOutput";
import { InternalErrorException } from "../shapes/InternalErrorException";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeAttack: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeAttack",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeAttackInput
  },
  output: {
    shape: DescribeAttackOutput
  },
  errors: [
    {
      shape: InternalErrorException
    },
    {
      shape: AccessDeniedException
    }
  ]
};
