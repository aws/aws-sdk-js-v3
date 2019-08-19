import { DescribeAccountAuditConfigurationInput } from "../shapes/DescribeAccountAuditConfigurationInput";
import { DescribeAccountAuditConfigurationOutput } from "../shapes/DescribeAccountAuditConfigurationOutput";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeAccountAuditConfiguration: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeAccountAuditConfiguration",
  http: {
    method: "GET",
    requestUri: "/audit/configuration"
  },
  input: {
    shape: DescribeAccountAuditConfigurationInput
  },
  output: {
    shape: DescribeAccountAuditConfigurationOutput
  },
  errors: [
    {
      shape: ThrottlingException
    },
    {
      shape: InternalFailureException
    }
  ]
};
