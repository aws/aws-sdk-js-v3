import { DescribeAuditMitigationActionsTaskInput } from "./DescribeAuditMitigationActionsTaskInput";
import { DescribeAuditMitigationActionsTaskOutput } from "./DescribeAuditMitigationActionsTaskOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ThrottlingException } from "./ThrottlingException";
import { InternalFailureException } from "./InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
