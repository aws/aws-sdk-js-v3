import { CreateVirtualMFADeviceInput } from "./CreateVirtualMFADeviceInput";
import { CreateVirtualMFADeviceOutput } from "./CreateVirtualMFADeviceOutput";
import { LimitExceededException } from "./LimitExceededException";
import { EntityAlreadyExistsException } from "./EntityAlreadyExistsException";
import { ServiceFailureException } from "./ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateVirtualMFADevice: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateVirtualMFADevice",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateVirtualMFADeviceInput
  },
  output: {
    shape: CreateVirtualMFADeviceOutput,
    resultWrapper: "CreateVirtualMFADeviceResult"
  },
  errors: [
    {
      shape: LimitExceededException
    },
    {
      shape: EntityAlreadyExistsException
    },
    {
      shape: ServiceFailureException
    }
  ]
};
