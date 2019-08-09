import { UpdateAccountAuditConfigurationInput } from "./UpdateAccountAuditConfigurationInput";
import { UpdateAccountAuditConfigurationOutput } from "./UpdateAccountAuditConfigurationOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { ThrottlingException } from "./ThrottlingException";
import { InternalFailureException } from "./InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
