import { DeleteVirtualMFADeviceInput } from "./DeleteVirtualMFADeviceInput";
import { DeleteVirtualMFADeviceOutput } from "./DeleteVirtualMFADeviceOutput";
import { NoSuchEntityException } from "./NoSuchEntityException";
import { DeleteConflictException } from "./DeleteConflictException";
import { LimitExceededException } from "./LimitExceededException";
import { ServiceFailureException } from "./ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteVirtualMFADevice: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteVirtualMFADevice",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteVirtualMFADeviceInput
  },
  output: {
    shape: DeleteVirtualMFADeviceOutput
  },
  errors: [
    {
      shape: NoSuchEntityException
    },
    {
      shape: DeleteConflictException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: ServiceFailureException
    }
  ]
};
