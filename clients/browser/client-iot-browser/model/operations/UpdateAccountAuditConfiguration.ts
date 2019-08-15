import { UpdateAccountAuditConfigurationInput } from "../shapes/UpdateAccountAuditConfigurationInput";
import { UpdateAccountAuditConfigurationOutput } from "../shapes/UpdateAccountAuditConfigurationOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateAccountAuditConfiguration: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateAccountAuditConfiguration",
  http: {
    method: "PATCH",
    requestUri: "/audit/configuration"
  },
  input: {
    shape: UpdateAccountAuditConfigurationInput
  },
  output: {
    shape: UpdateAccountAuditConfigurationOutput
  },
  errors: [
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
