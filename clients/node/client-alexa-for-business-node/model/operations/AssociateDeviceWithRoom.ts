import { AssociateDeviceWithRoomInput } from "../shapes/AssociateDeviceWithRoomInput";
import { AssociateDeviceWithRoomOutput } from "../shapes/AssociateDeviceWithRoomOutput";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { ConcurrentModificationException } from "../shapes/ConcurrentModificationException";
import { DeviceNotRegisteredException } from "../shapes/DeviceNotRegisteredException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const AssociateDeviceWithRoom: _Operation_ = {
  metadata: ServiceMetadata,
  name: "AssociateDeviceWithRoom",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: AssociateDeviceWithRoomInput
  },
  output: {
    shape: AssociateDeviceWithRoomOutput
  },
  errors: [
    {
      shape: LimitExceededException
    },
    {
      shape: ConcurrentModificationException
    },
    {
      shape: DeviceNotRegisteredException
    }
  ]
};
