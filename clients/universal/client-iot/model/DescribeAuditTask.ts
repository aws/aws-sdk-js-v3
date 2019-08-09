import { DescribeAuditTaskInput } from "./DescribeAuditTaskInput";
import { DescribeAuditTaskOutput } from "./DescribeAuditTaskOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ThrottlingException } from "./ThrottlingException";
import { InternalFailureException } from "./InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeAuditTask: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeAuditTask",
  http: {
    method: "GET",
    requestUri: "/audit/tasks/{taskId}"
  },
  input: {
    shape: DescribeAuditTaskInput
  },
  output: {
    shape: DescribeAuditTaskOutput
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
