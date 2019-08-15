import { DescribeAuditTaskInput } from "../shapes/DescribeAuditTaskInput";
import { DescribeAuditTaskOutput } from "../shapes/DescribeAuditTaskOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
