import { AssociateDeviceWithNetworkProfileInput } from "../shapes/AssociateDeviceWithNetworkProfileInput";
import { AssociateDeviceWithNetworkProfileOutput } from "../shapes/AssociateDeviceWithNetworkProfileOutput";
import { NotFoundException } from "../shapes/NotFoundException";
import { ConcurrentModificationException } from "../shapes/ConcurrentModificationException";
import { DeviceNotRegisteredException } from "../shapes/DeviceNotRegisteredException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const AssociateDeviceWithNetworkProfile: _Operation_ = {
  metadata: ServiceMetadata,
  name: "AssociateDeviceWithNetworkProfile",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: AssociateDeviceWithNetworkProfileInput
  },
  output: {
    shape: AssociateDeviceWithNetworkProfileOutput
  },
  errors: [
    {
      shape: NotFoundException
    },
    {
      shape: ConcurrentModificationException
    },
    {
      shape: DeviceNotRegisteredException
    }
  ]
};
