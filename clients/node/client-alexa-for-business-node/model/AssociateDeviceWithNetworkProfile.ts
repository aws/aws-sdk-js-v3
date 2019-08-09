import { AssociateDeviceWithNetworkProfileInput } from "./AssociateDeviceWithNetworkProfileInput";
import { AssociateDeviceWithNetworkProfileOutput } from "./AssociateDeviceWithNetworkProfileOutput";
import { NotFoundException } from "./NotFoundException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { DeviceNotRegisteredException } from "./DeviceNotRegisteredException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
