import { DeleteAccountAuditConfigurationInput } from "./DeleteAccountAuditConfigurationInput";
import { DeleteAccountAuditConfigurationOutput } from "./DeleteAccountAuditConfigurationOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ThrottlingException } from "./ThrottlingException";
import { InternalFailureException } from "./InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteAccountAuditConfiguration: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteAccountAuditConfiguration",
  http: {
    method: "DELETE",
    requestUri: "/audit/configuration"
  },
  input: {
    shape: DeleteAccountAuditConfigurationInput
  },
  output: {
    shape: DeleteAccountAuditConfigurationOutput
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
