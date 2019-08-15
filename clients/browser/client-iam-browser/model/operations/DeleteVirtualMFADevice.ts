import { DeleteVirtualMFADeviceInput } from "../shapes/DeleteVirtualMFADeviceInput";
import { DeleteVirtualMFADeviceOutput } from "../shapes/DeleteVirtualMFADeviceOutput";
import { NoSuchEntityException } from "../shapes/NoSuchEntityException";
import { DeleteConflictException } from "../shapes/DeleteConflictException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { ServiceFailureException } from "../shapes/ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
