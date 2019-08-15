import { DeleteAccountAuditConfigurationInput } from "../shapes/DeleteAccountAuditConfigurationInput";
import { DeleteAccountAuditConfigurationOutput } from "../shapes/DeleteAccountAuditConfigurationOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
