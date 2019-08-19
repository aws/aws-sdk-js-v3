import { CreateVirtualMFADeviceInput } from "../shapes/CreateVirtualMFADeviceInput";
import { CreateVirtualMFADeviceOutput } from "../shapes/CreateVirtualMFADeviceOutput";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { EntityAlreadyExistsException } from "../shapes/EntityAlreadyExistsException";
import { ServiceFailureException } from "../shapes/ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
