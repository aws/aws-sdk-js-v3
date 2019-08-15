import { DescribeAuditFindingInput } from "../shapes/DescribeAuditFindingInput";
import { DescribeAuditFindingOutput } from "../shapes/DescribeAuditFindingOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeAuditFinding: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeAuditFinding",
  http: {
    method: "GET",
    requestUri: "/audit/findings/{findingId}"
  },
  input: {
    shape: DescribeAuditFindingInput
  },
  output: {
    shape: DescribeAuditFindingOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    },
    {
      shape: InvalidRequestException
    },
    {
      shape: ThrottlingException
    },
    {
      shape: InternalFailureException
    }
  ]
};
