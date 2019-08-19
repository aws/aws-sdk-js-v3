import { DescribeAuditMitigationActionsTaskInput } from "../shapes/DescribeAuditMitigationActionsTaskInput";
import { DescribeAuditMitigationActionsTaskOutput } from "../shapes/DescribeAuditMitigationActionsTaskOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeAuditMitigationActionsTask: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeAuditMitigationActionsTask",
  http: {
    method: "GET",
    requestUri: "/audit/mitigationactions/tasks/{taskId}"
  },
  input: {
    shape: DescribeAuditMitigationActionsTaskInput
  },
  output: {
    shape: DescribeAuditMitigationActionsTaskOutput
  },
  errors: [
    {
      shape: InvalidRequestException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: ThrottlingException
    },
    {
      shape: InternalFailureException
    }
  ]
};
