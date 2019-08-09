import { DescribeScheduledAuditInput } from "./DescribeScheduledAuditInput";
import { DescribeScheduledAuditOutput } from "./DescribeScheduledAuditOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ThrottlingException } from "./ThrottlingException";
import { InternalFailureException } from "./InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeScheduledAudit: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeScheduledAudit",
  http: {
    method: "GET",
    requestUri: "/audit/scheduledaudits/{scheduledAuditName}"
  },
  input: {
    shape: DescribeScheduledAuditInput
  },
  output: {
    shape: DescribeScheduledAuditOutput
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
