import { RegisterAVSDeviceInput } from "../shapes/RegisterAVSDeviceInput";
import { RegisterAVSDeviceOutput } from "../shapes/RegisterAVSDeviceOutput";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { ConcurrentModificationException } from "../shapes/ConcurrentModificationException";
import { InvalidDeviceException } from "../shapes/InvalidDeviceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const RegisterAVSDevice: _Operation_ = {
  metadata: ServiceMetadata,
  name: "RegisterAVSDevice",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: RegisterAVSDeviceInput
  },
  output: {
    shape: RegisterAVSDeviceOutput
  },
  errors: [
    {
      shape: LimitExceededException
    },
    {
      shape: ConcurrentModificationException
    },
    {
      shape: InvalidDeviceException
    }
  ]
};
