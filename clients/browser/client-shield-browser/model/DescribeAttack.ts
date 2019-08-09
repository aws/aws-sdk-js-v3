import { DescribeAttackInput } from "./DescribeAttackInput";
import { DescribeAttackOutput } from "./DescribeAttackOutput";
import { InternalErrorException } from "./InternalErrorException";
import { AccessDeniedException } from "./AccessDeniedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
