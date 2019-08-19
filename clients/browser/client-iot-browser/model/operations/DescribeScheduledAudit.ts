import { DescribeScheduledAuditInput } from "../shapes/DescribeScheduledAuditInput";
import { DescribeScheduledAuditOutput } from "../shapes/DescribeScheduledAuditOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
