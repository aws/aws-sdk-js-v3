import { DescribeAuditFindingInput } from "./DescribeAuditFindingInput";
import { DescribeAuditFindingOutput } from "./DescribeAuditFindingOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidRequestException } from "./InvalidRequestException";
import { ThrottlingException } from "./ThrottlingException";
import { InternalFailureException } from "./InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
